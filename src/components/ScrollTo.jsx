import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/" && !sessionStorage.getItem("alreadyReloaded")) {
      sessionStorage.setItem("alreadyReloaded", "true");
      window.location.reload();
    } else if (pathname !== "/") {
      sessionStorage.removeItem("alreadyReloaded");
    }
  }, [pathname]);

  return null;
}
