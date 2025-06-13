// src/pages/AdminMessages.jsx

import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import "./UserMessages.css";

const AdminMessages = () => {
  const [doctorMessages, setDoctorMessages] = useState([]);
  const [opinionMessages, setOpinionMessages] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);
  const [doctorsMap, setDoctorsMap] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const storedEmail = localStorage.getItem("userEmail");
      if (!storedEmail) {
        alert("🚫 يجب تسجيل الدخول أولاً.");
        window.location.href = "/login";
        return;
      }

      setUserEmail(storedEmail);

      const doctorsSnapshot = await getDocs(collection(db, "The doctor"));
      const isDoctor = doctorsSnapshot.docs.some(
        (doc) => doc.data().email === storedEmail
      );

      setIsAdmin(isDoctor);
    };

    checkAdmin();
  }, []);

  useEffect(() => {
    const fetchDoctors = async () => {
      const snapshot = await getDocs(collection(db, "The doctor"));
      const map = {};
      snapshot.docs.forEach((doc) => {
        map[doc.id] = doc.data();
      });
      setDoctorsMap(map);
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        let doctorQuery, opinionQuery, appointmentQuery;

        if (isAdmin) {
          doctorQuery = collection(db, "doctorMessages");
          opinionQuery = collection(db, "opinions");
          appointmentQuery = collection(db, "appointments");
        } else {
          doctorQuery = query(
            collection(db, "doctorMessages"),
            where("email", "==", userEmail)
          );
          opinionQuery = query(
            collection(db, "opinions"),
            where("email", "==", userEmail)
          );
          appointmentQuery = query(
            collection(db, "appointments"),
            where("email", "==", userEmail)
          );
        }

        const [snapshot1, snapshot2, snapshot3] = await Promise.all([
          getDocs(doctorQuery),
          getDocs(opinionQuery),
          getDocs(appointmentQuery),
        ]);

        setDoctorMessages(
          snapshot1.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setOpinionMessages(
          snapshot2.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setAppointments(
          snapshot3.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (error) {
        console.error("❌ خطأ أثناء تحميل البيانات:", error);
        alert("حدث خطأ أثناء تحميل البيانات.");
      } finally {
        setLoading(false);
      }
    };

    if (userEmail !== null) {
      fetchMessages();
    }
  }, [userEmail, isAdmin]);

  const deleteMessage = async (collectionName, id) => {
    const confirmDelete = window.confirm("❗ هل أنت متأكد من حذف الرسالة؟");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, collectionName, id));
      if (collectionName === "doctorMessages") {
        setDoctorMessages((prev) => prev.filter((msg) => msg.id !== id));
      } else if (collectionName === "opinions") {
        setOpinionMessages((prev) => prev.filter((msg) => msg.id !== id));
      } else if (collectionName === "appointments") {
        setAppointments((prev) => prev.filter((appt) => appt.id !== id));
      }
      alert("✅ تم الحذف بنجاح");
    } catch (error) {
      console.error("❌ خطأ أثناء الحذف:", error);
      alert("حدث خطأ أثناء الحذف.");
    }
  };

  const editDoctorMessage = async (id, msg) => {
    const fullName = prompt("✏️ الاسم:", msg.fullName);
    const message = prompt("📝 الرسالة:", msg.message);
    if (!fullName || !message) return;

    try {
      await updateDoc(doc(db, "doctorMessages", id), {
        fullName,
        message,
      });
      setDoctorMessages((prev) =>
        prev.map((m) =>
          m.id === id ? { ...m, fullName, message } : m
        )
      );
    } catch (error) {
      console.error("❌ خطأ أثناء التعديل:", error);
      alert("حدث خطأ أثناء التعديل.");
    }
  };

  const editOpinionMessage = async (id, msg) => {
    const name = prompt("✏️ الاسم:", msg.name);
    const age = prompt("📅 العمر:", msg.age);
    const specialization = prompt("🩺 التخصص:", msg.specialization);
    const message = prompt("📝 الملاحظة:", msg.message);
    if (!name || !age || !specialization || !message) return;

    try {
      await updateDoc(doc(db, "opinions", id), {
        name,
        age,
        specialization,
        message,
      });
      setOpinionMessages((prev) =>
        prev.map((m) =>
          m.id === id ? { ...m, name, age, specialization, message } : m
        )
      );
    } catch (error) {
      console.error("❌ خطأ أثناء التعديل:", error);
      alert("حدث خطأ أثناء التعديل.");
    }
  };

  const editAppointment = async (id, appt) => {
    const name = prompt("✏️ الاسم:", appt.name);
    const phone = prompt("📞 الهاتف:", appt.phone);
    const service = prompt("🛠️ نوع الخدمة:", appt.service);
    const date = prompt("📆 التاريخ:", appt.date);
    if (!name || !phone || !service || !date) return;

    try {
      await updateDoc(doc(db, "appointments", id), {
        name,
        phone,
        service,
        date,
      });
      setAppointments((prev) =>
        prev.map((a) =>
          a.id === id ? { ...a, name, phone, service, date } : a
        )
      );
    } catch (error) {
      console.error("❌ خطأ أثناء التعديل:", error);
      alert("حدث خطأ أثناء التعديل.");
    }
  };

  if (loading)
    return <p style={{ textAlign: "center" }}>⏳ جاري تحميل البيانات...</p>;

  return (
    <div className="user-messages-container">
      {isAdmin && (
        <p style={{ color: "green", textAlign: "center", fontWeight: "bold" }}>
          🛡️ مرحباً بك، لديك صلاحيات كمشرف (طبيب)
        </p>
      )}

      <h2>   الرسائل الطبية</h2>
      {doctorMessages.length === 0 ? (
        <p>لا توجد رسائل.</p>
      ) : (
        <ul>
          {doctorMessages.map((msg) => {
            const doctor = doctorsMap[msg.doctorId];
            const doctorName = doctor
              ? `${doctor.name} ${doctor.surname}`
              : "غير متوفر";

            return (
              <li key={msg.id} className="message-box">
                <p><strong>الاسم:</strong> {msg.fullName}</p>
                <p><strong>البريد:</strong> {msg.email}</p>
                <p><strong>الرسالة:</strong> {msg.message}</p>
                <p><strong>اسم الطبيب:</strong> {doctorName}</p>
                <div className="message-actions">
                  {!isAdmin && msg.email === userEmail && (
                    <button className="edit" onClick={() => editDoctorMessage(msg.id, msg)}>✏️ تعديل</button>
                  )}
                  <button className="delete" onClick={() => deleteMessage("doctorMessages", msg.id)}>🗑️ حذف</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <h2>طلبات الرأي الطبي</h2>
      {opinionMessages.length === 0 ? (
        <p>لا توجد طلبات رأي طبي.</p>
      ) : (
        <ul>
          {opinionMessages.map((opinion) => (
            <li key={opinion.id} className="message-box">
              <p><strong>الاسم:</strong> {opinion.name}</p>
              <p><strong>البريد:</strong> {opinion.email}</p>
              <p><strong>العمر:</strong> {opinion.age}</p>
              <p><strong>التخصص المطلوب:</strong> {opinion.specialization}</p>
              <p><strong>الملاحظة:</strong> {opinion.message}</p>
              <div className="message-actions">
                {!isAdmin && opinion.email === userEmail && (
                  <button className="edit" onClick={() => editOpinionMessage(opinion.id, opinion)}>✏️ تعديل</button>
                )}
                <button className="delete" onClick={() => deleteMessage("opinions", opinion.id)}>🗑️ حذف</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h2>الحجوزات الطبية</h2>
      {appointments.length === 0 ? (
        <p>لا توجد حجوزات.</p>
      ) : (
        <ul>
          {appointments.map((appt) => (
            <li key={appt.id} className="message-box">
              <p><strong>الاسم:</strong> {appt.name}</p>
              <p><strong>رقم الهاتف:</strong> {appt.phone}</p>
              <p><strong>نوع الخدمة:</strong> {appt.service}</p>
              <p><strong>التاريخ:</strong> {appt.date}</p>
              <p><strong>البريد الإلكتروني:</strong> {appt.email}</p>
              <div className="message-actions">
                {!isAdmin && appt.email === userEmail && (
                  <button className="edit" onClick={() => editAppointment(appt.id, appt)}>✏️ تعديل</button>
                )}
                <button className="delete" onClick={() => deleteMessage("appointments", appt.id)}>🗑️ حذف</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminMessages;
