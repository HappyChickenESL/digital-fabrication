import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./input.css";
import {
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import Navbar from "./components/layout/Navbar.tsx";
import About from "./components/About.tsx";
import FinalProjectIdea from "./components/FinalProjectIdea.tsx";
import AssignmentTwo from "./components/assignments/week-two/AssignmentTwo.tsx";
import AssigmentThree from "./components/assignments/week-three/AssignmentThree.tsx";
import AssigmentFour from "./components/assignments/week-four/AssignmentFour.tsx";

const rootRoute = createRootRoute({
  component: () => (
    <div className="flex w-full bg-black text-white min-h-screen font-mono">
      <div className="min-w-[20rem]">
        <Navbar></Navbar>
      </div>
      <div>
        <div className="p-4 w-[70%]">
          <Outlet></Outlet>
        </div>
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

const assignmentTwoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/assignments/two",
  component: () => <AssignmentTwo></AssignmentTwo>,
});

const assignmentThreeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/assignments/three",
  component: () => <AssigmentThree></AssigmentThree>,
});

const assignmentFourRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/assignments/four",
  component: () => <AssigmentFour></AssigmentFour>,
});

const routeTree = rootRoute.addChildren([
  aboutRoute,
  homeRoute,
  finalIdeaRoute,
  assignmentTwoRoute,
  assignmentThreeRoute,
  assignmentFourRoute,
]);

const history = createHashHistory();

export const router = createRouter({ routeTree, history });

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
