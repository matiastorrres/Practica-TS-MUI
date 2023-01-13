import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "./common/Router/RouterLayout";
import Home from "./page/Home";
import Login from "./page/Login";
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
