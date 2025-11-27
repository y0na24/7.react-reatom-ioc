import { Outlet } from "react-router-dom";
import { NavBar } from "@/widgets/NavBar";
import { getRoutes } from "@/shared/routes";

export const BaseLayout = () => {
  return (
    <div className="min-h-screen">
      <NavBar routes={getRoutes()} />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
