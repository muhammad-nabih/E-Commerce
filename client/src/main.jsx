import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./pages/About/About.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import { Services } from "./pages/Services/Services.jsx";
import Pricing from "./pages/Pricing/Pricing.jsx";
import SidebarProvider from "./contexts/sidebarContext/SidebarContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/services",
    element: <Services />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
    errorElement: <NotFoundPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>

    <RouterProvider router={router} />
    </SidebarProvider>
  </React.StrictMode>
);
