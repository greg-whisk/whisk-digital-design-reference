import { Outlet, ScrollRestoration } from "react-router";
import { Nav } from "./components/Nav";

export function Root() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Nav />
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  );
}
