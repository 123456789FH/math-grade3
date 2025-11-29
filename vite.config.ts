import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // مهم: هذا المسار يجب أن يطابق اسم المستودع على GitHub
  base: "/math-grade3/",
});
