import { useEffect, useState } from "react";

function useRoleSwitcher({ roles, interval = 1800 }) {
  const [mounted, setMounted] = useState(false);
  const [role, setRole] = useState(roles.length > 0 ? roles[0] : "");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const intervalId = setInterval(() => {
      setRole((prev) => roles[(roles.indexOf(prev) + 1) % roles.length]);
    }, interval);

    return () => clearInterval(intervalId);
  }, [roles, interval, mounted]);

  // Trả về null khi chưa mounted để tránh mismatch
  return mounted ? role : null;
}

export default useRoleSwitcher;
