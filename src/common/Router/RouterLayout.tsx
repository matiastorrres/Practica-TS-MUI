import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

export function RouterLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
