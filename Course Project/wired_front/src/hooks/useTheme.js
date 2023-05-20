import { useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  const { setPrimaryColor } = useContext(ThemeContext);
  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    if (hours > 12) {
      setPrimaryColor("dark");
    } else {
      setPrimaryColor("white");
    }
  }, []);
};
