import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { InstructorProvider } from "./providers/InstructorContext/InstructorContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./routes/Routes";
import AuthProvider from "./providers/AuthProvider/AuthProvider";

AOS.init({
  // Global settings here
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <InstructorProvider>
          <RouterProvider router={router} />
        </InstructorProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
