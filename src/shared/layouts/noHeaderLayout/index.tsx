import { Outlet } from "react-router-dom";

export default function NoHeaderLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
