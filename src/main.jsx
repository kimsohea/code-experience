import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Iridescence from "@/components/lib/Iridescence";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Iridescence color={[1, 1, 1]} mouseReact={false} speed={0.2} />
    <App />
  </StrictMode>
);
