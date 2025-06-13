 // ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * هذا المكون يُستخدم لإعادة الصفحة إلى الأعلى عند كل تنقل (Route change)
 */
const ScrollToTop = () => {
  const { pathname } = useLocation(); // نأخذ اسم الصفحة الحالية من الراوتر

  useEffect(() => {
    window.scrollTo(0, 0); // عند كل تغيير في المسار، يتم التمرير إلى أعلى الصفحة
  }, [pathname]); // التابع يعمل فقط عندما يتغير المسار

  return null; // لا يعرض أي شيء في الواجهة
};

export default ScrollToTop;
