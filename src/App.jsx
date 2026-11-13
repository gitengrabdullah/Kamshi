
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
// import Collections from "../components/collections/collection";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
