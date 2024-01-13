import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { InstructorProvider } from "./providers/InstructorContext/InstructorContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

AOS.init({
  // Global settings here
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <InstructorProvider>
        <RouterProvider router={router} />
      </InstructorProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
