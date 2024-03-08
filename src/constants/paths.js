import { Main } from "../ui/pages/main/Main";
import { Personal } from "../ui/pages/personal/Personal";
import { Market } from "../ui/pages/market/Market";

export const paths = [
  {
    path: "/",
    element: Main,
  },
  { path: "/personal", element: Personal },
  { path: "/market", element: Market },
];
