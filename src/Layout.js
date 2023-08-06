import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function useLayoutEffect() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
