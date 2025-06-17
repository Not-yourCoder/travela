import { createRoute, createRouter } from "@tanstack/react-router";
import AboutPage from "@/pages/About";
import { rootRoute } from "./__root";
import Home from "@/pages/Home";

const homeRoute = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: Home,
});
const aboutRoute = createRoute({
  path: "/aboutUs",
  getParentRoute: () => rootRoute,
  component: AboutPage,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
