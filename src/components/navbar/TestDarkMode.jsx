import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { themeChange } from "theme-change";
import { saveTheme } from "../../features/theme/themeSlice";

function TestDarkMode({ style }) {
  // need to figure how to get the curent theme whitout state

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <select data-choose-theme>
      <option value="">Default</option>
      <option value="night">Dark</option>
      <option value="light">Pink</option>
    </select>
  );
}

export default TestDarkMode;
