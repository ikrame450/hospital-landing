 import React, { useState, useEffect } from "react";
 import { collection, addDoc, getDocs } from "firebase/firestore";
 import { firestore } from "../firebase/firebaseConfig";
 import { FaStethoscope, FaUserMd, FaHeartbeat, FaTooth } from "react-icons/fa";
 import "./DoctorContactPage.css";
 
 const icons = {
   "طب القلب": <FaHeartbeat />,
   "طب الأسنان": <FaTooth />,
   "الطب العام": <FaStethoscope />,
   "الجراحة": <FaUserMd />,
 };
 
 const DoctorContactPage = () => {
   const [doctors, setDoctors] = useState([]);
   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [doctorId, setDoctorId] = useState("");
   const [successMessage, setSuccessMessage] = useState("");
   const [error, setError] = useState("");
 
   useEffect(() => {
     const fetchDoctors = async () => {
       try {
         const querySnapshot = await getDocs(collection(firestore, "The doctor")); // ✔️ اسم المجموعة الصحيح
         const doctorsList = querySnapshot.docs.map((docSnap) => {
           const data = docSnap.data();
           return {
             id: docSnap.id,
             name: data.name || "",
             surname: data.surname || "",
             specialty: data.specialty || "",
             age: data.age || 0,
           };
         });
         setDoctors(doctorsList);
       } catch (err) {
         console.error("خطأ في جلب الأطباء:", err);
         setError("فشل في تحميل بيانات الأطباء.");
       }
     };
 
     fetchDoctors();
   }, []);
 
  const handleSubmit = async (e) => {
  e.preventDefault();
  setSuccessMessage("");
  setError("");

  if (!doctorId) {
    setError("يرجى اختيار طبيب");
    return;
  }

  // ✅ العثور على بيانات الطبيب المختار من القائمة
  const selectedDoctor = doctors.find((doc) => doc.id === doctorId);
  const doctorFullName = selectedDoctor
    ? `${selectedDoctor.name} ${selectedDoctor.surname}`
    : "غير معروف";

  try {
    await addDoc(collection(firestore, "doctorMessages"), {
      fullName,
      email,
      message,
      doctorId,
      doctorName: doctorFullName, // ✅ إضافة اسم الطبيب هنا
      createdAt: new Date(),
    });

    setSuccessMessage("✅ تم إرسال الرسالة بنجاح!");
    setFullName("");
    setEmail("");
    setMessage("");
    setDoctorId("");
  } catch (err) {
    setError("❌ فشل في إرسال الرسالة: " + err.message);
  }
};

   return (
     <div className="doctor-contact-container">
       <h1 className="page-title">الأطباء وإرسال رسالة طبية</h1>
 
       {/* قسم الأطباء */}
       <section className="doctors-section">
         <h2>فريق الأطباء</h2>
         {doctors.length === 0 ? (
           <p className="no-doctors-message">⚠️ لا يوجد أطباء حالياً.</p>
         ) : (
           <div className="doctors-grid">
             {doctors.map((doc) => (
               <div key={doc.id} className="doctor-card">
                 <div className="doctor-icon">
                   {icons[doc.specialty] || <FaUserMd />}
                 </div>
                 <h3>
                   {doc.name} {doc.surname}
                 </h3>
                 <p><strong>الاختصاص:</strong> {doc.specialty}</p>
                 <p><strong>العمر:</strong> {doc.age} سنة</p>
               </div>
             ))}
           </div>
         )}
       </section>
 
       {/* قسم إرسال الرسالة */}
       <section className="contact-form-section">
         <h2>إرسال رسالة طبية</h2>
         <form className="contact-form" onSubmit={handleSubmit}>
           <label>الاسم الكامل</label>
           <input
             type="text"
             placeholder="اكتب اسمك"
             value={fullName}
             onChange={(e) => setFullName(e.target.value)}
             required
           />
 
           <label>البريد الإلكتروني</label>
           <input
             type="email"
             placeholder="example@email.com"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
           />
 
           <label>اختر الطبيب</label>
           <select
             value={doctorId}
             onChange={(e) => setDoctorId(e.target.value)}
             required
           >
             <option value="">-- اختر الطبيب --</option>
             {doctors.map((doc) => (
               <option key={doc.id} value={doc.id}>
                 {doc.name} {doc.surname} - {doc.specialty}
               </option>
             ))}
           </select>
 
           <label>الرسالة</label>
           <textarea
             placeholder="اكتب رسالتك هنا"
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             required
           ></textarea>
 
           <button type="submit">إرسال</button>
         </form>
 
         {successMessage && <p className="success-message">{successMessage}</p>}
         {error && <p className="error-message">{error}</p>}
       </section>
     </div>
   );
 };
 
 export default DoctorContactPage;
 