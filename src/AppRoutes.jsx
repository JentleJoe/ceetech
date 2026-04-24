import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Home";
import FloatingSocialBar from "./components/FloatingSocialBar";

const About = lazy(() => import("./pages/About"));
const Furniture = lazy(() => import("./pages/Furniture"));
const Interiors = lazy(() => import("./pages/Interiors"));
const Academy = lazy(() => import("./pages/Academy"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AppRoutes = () => (
  <>
    <FloatingSocialBar />
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/interiors" element={<Interiors />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </>
);

export default AppRoutes;
