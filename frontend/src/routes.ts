import { lazy } from "react";

enum eRoutes {
  signup = "/signup",
  login = "/login",
  home = "/",
  profile = "/profile",
  about = "/about",
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
  {
    path: eRoutes.home,
    component: lazy(() => import("./pages/Home")),
  },
  {
    path: eRoutes.about,
    component: lazy(() => import("./pages/About")),
  },
  {
    path: eRoutes.profile,
    component: lazy(() => import("./pages/Profile")),
  },
];
