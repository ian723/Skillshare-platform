import { createRouter, createWebHistory } from "vue-router";
import { HomeView, RegistrationView, LoginView, WorkView } from "../views";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/register", name: "register", component: RegistrationView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/workspace", name: "workspace", component: WorkView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
