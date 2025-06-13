import vaccine from "../assets/images/vaccine-icon.png"
import selfcare from "../assets/images/selfcare.png"
import laboratory from "../assets/images/laboratory.png"
import treatment from "../assets/images/treatment.png"
import pethealth from "../assets/images/pethealth.png"
import symptoms from "../assets/images/symptoms.png"
import checkup from "../assets/images/checkup.png"
import services from "../../data/services"; // ✅ تأكد أن المسار بهذا الشكل إذا كنت داخل components/services

const services = [
    {
        image: vaccine,
        name: "لقاح",
        body: "حماية فعالة ضد الامراض من خلال لقاحات موثوقة"
    },
    {
        image: treatment,
        name: "العيادة",
        body: "رعاية طبية متكاملة يقدمها طاقم متخصص"
    },
    {
        image: selfcare,
        name: "الرعاية الذاتية",
        body: "نصائح وارشادات لتحسين صحتك اليومية "
    },
    {
        image: laboratory,
        name: "مختبر ",
        body: "تحاليل دقيقة لفهم حالاتك الصحية بشكل افضل"
    },
    {
        image: treatment,
        name: "العلاج",
        body: "خطط علاجية مخصصة لحالتك من قبل مختصين"
    },
    {
        image: pethealth,
        name: "صحة الحيوانات الاليفة ",
        body: "عناية بيطرية شاملة لحيواناتك الاليفة "
    },
    {
        image: symptoms,
        name: "الاعراض",
        body: "تقييم الاعراض لمساعدتك في التشخيص المبكر"
    },
    {
        image: checkup,
        name: "الفحص الدوري",
        body: "فحوصات دورية للاطمئنان على صحتك العامة"
    },
]

export default services