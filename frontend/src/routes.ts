import { lazy } from "react";

enum eRoutes {
  signup = "/",
  login = "/login",
}

export const routes = [
  {
    path: eRoutes.signup,
    component: lazy(() => import("./pages/Signup")),
  },
  {
    path: eRoutes.login,
    component: lazy(() => import("./pages/Login")),
  },
];
