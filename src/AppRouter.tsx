import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "./common/Router/RouterLayout";
import CharacterPage from "./page/CharacterPage/CharacterPage";
import Home from "./page/Home";
import Login from "./page/Login";
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
