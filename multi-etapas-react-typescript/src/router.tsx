import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Step1 } from "./Pages/Step1";
import { Step2 } from "./Pages/Step2";
import { Step3 } from "./Pages/Step3";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
      </Routes>
    </BrowserRouter>
  );
};
