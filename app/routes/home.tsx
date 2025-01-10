import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

// eslint-disable-next-line -- React Router added the empty object so they could attach the type for reference
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
