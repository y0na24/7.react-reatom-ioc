import { cn } from "@/shared/lib/utils";
import { ROUTES, type Route } from "@/shared/routes";
import { Link, NavLink } from "react-router-dom";

export function NavBar({ routes }: { routes: Route[] }) {
  const linkBase =
    "px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground";
  const active = "bg-accent text-accent-foreground";

  return (
    <nav className="border-b">
      <div className="container mx-auto p-4 flex items-center gap-4">
        <Link to={ROUTES.HOME.path} className="font-semibold">
          R&M
        </Link>

        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            end={route.path === ROUTES.HOME.path}
            className={({ isActive }) => cn(linkBase, isActive && active)}
          >
            {route.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
