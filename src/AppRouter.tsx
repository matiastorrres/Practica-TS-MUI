import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "./common/Router/RouterLayout";
import { Home, Login, CharacterPage } from "./page";
// import CharacterPage from "./page/CharacterPage/CharacterPage";
// import Login from "./page/Login";
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
