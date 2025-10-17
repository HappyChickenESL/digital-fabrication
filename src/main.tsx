import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./input.css";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import Navbar from "./components/layout/Navbar.tsx";
import About from "./components/About.tsx";
import FinalProjectIdea from "./components/FinalProjectIdea.tsx";

const rootRoute = createRootRoute({
  component: () => (
    <div className="grid grid-cols-5 bg-black text-white h-[100vh]">
      <div className="col-span-1 h-full">
        <Navbar></Navbar>
      </div>
      <div className="col-span-4 h-full p-4">
        <Outlet></Outlet>
      </div>
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return <div>Welcome Home!</div>;
  },
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => <About></About>,
});

const finalIdeaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/final",
  component: () => <FinalProjectIdea></FinalProjectIdea>,
});

const routeTree = rootRoute.addChildren([
  aboutRoute,
  homeRoute,
  finalIdeaRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
