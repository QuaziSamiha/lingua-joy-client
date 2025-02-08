import React from "react";
// USED TO MANIPULATE WEB DOM
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./providers/AuthProvider/AuthProvider";
import router from "./Routes/Routes";
// main.jsx -- ENTRY POINT OF REACT

// used for animation
AOS.init({
  // Global settings here
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
