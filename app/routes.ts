import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

/*
- Unauthed routes
    - welcome
    - login
    - register
- Authed routes
    - home
    - maps
    - addmap
    - viewer
    - profile
*/

export default [
  // unauthed
  index("routes/welcome.tsx"),
  route("/login", "routes/login.tsx"),
  route("/register", "routes/register.tsx"),
  // authed
  layout("dashboard.tsx", [
    route("/home", "routes/home.tsx"),
    route("/maps", "routes/maps.tsx"),
    route("/profile", "routes/profile.tsx"),
    route("/viewer", "routes/viewer.tsx"),
  ]),
] satisfies RouteConfig;
