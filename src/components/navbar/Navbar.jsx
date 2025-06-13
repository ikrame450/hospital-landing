// Navbar.jsx
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Box,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../assets/images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../../firebase/firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";

const navItems = [
  { text: "الرئيسية", path: "/" },
  { text: "الرعاية الطبية", path: "/care" },
  { text: "الصحة الطبية", path: "/health" },
  { text: "فحص طبي", path: "/exam" },
  { text: "مختبر طبي", path: "/lab" },
  { text: "الرسائل ", path: "/admin-messages" },
];

const sideItems = [
  { text: "تسجيل الدخول", path: "/login" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ حالة المستخدم
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  // ✅ تحديث حالة الدخول عند تحميل الصفحة
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  // ✅ تسجيل الخروج
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("userEmail");
      alert("✅ تم تسجيل الخروج بنجاح.");
      navigate("/login");
    } catch (error) {
      alert("❌ حدث خطأ أثناء تسجيل الخروج.");
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(to right, #bee6de, #677bd4)",
        py: 1,
        px: { xs: 2, md: 4 },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* الشعار */}
        <Link to="/">
          <img
            src={logo}
            alt="medic-logo"
            style={{ width: 110, cursor: "pointer" }}
          />
        </Link>

        {/* زر القائمة للجوال */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" }, ml: "auto" }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon fontSize="medium" />
        </IconButton>

        {/* روابط سطح المكتب + زر الخروج */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            alignItems: "center",
          }}
        >
          {[...navItems, ...sideItems].map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                px: 2,
                py: 1,
                fontSize: "0.95rem",
                fontWeight: "bold",
                color: "#010007",
                borderRadius: "10px",
                backgroundColor: isActive(item.path)
                  ? "rgba(32, 20, 207, 0.4)"
                  : "rgba(255, 255, 255, 0.15)",
                transition: "0.3s",
                whiteSpace: "nowrap",
                ":hover": {
                  backgroundColor: "rgba(37, 4, 4, 0.25)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {item.text}
            </Button>
          ))}

          {/* ✅ زر تسجيل الخروج */}
          {isLoggedIn && (
            <Tooltip title="تسجيل الخروج">
              <IconButton onClick={handleLogout} color="inherit">
                <LogoutIcon sx={{ color: "#222" }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        {/* قائمة الجوال الجانبية */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              width: 260,
              padding: 3,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {[...navItems, ...sideItems].map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                onClick={() => setOpen(false)}
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#010007",
                  justifyContent: "flex-start",
                  backgroundColor: isActive(item.path)
                    ? "rgba(255,255,255,0.35)"
                    : "transparent",
                }}
              >
                {item.text}
              </Button>
            ))}

            {/* ✅ زر الخروج داخل drawer */}
            {isLoggedIn && (
              <Button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#c62828",
                  justifyContent: "flex-start",
                }}
                startIcon={<LogoutIcon />}
              >
                تسجيل الخروج
              </Button>
            )}
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
