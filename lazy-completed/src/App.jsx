import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import SkeletonAdmin from "./components/skeletons/SkeletonAdmin";
import { lazy, Suspense } from "react";

//const Admin = lazy(() => import('./components/Admin'))
import Admin from "./components/Admin";

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="admin" element={<Admin />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
