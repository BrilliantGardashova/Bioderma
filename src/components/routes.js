import Index from "../pages/home.js";
import { Routes, Route } from "react-router-dom";

export default function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}
