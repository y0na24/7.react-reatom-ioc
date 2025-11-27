import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./baseLayout.component";
import { ROUTES } from "@/shared/routes";
import { CharactersPage } from "@/pages/CharactersPage/characters.page";
import { FavoritesPage } from "@/pages/FavoritesPage/favorites.page";

export const setupRouter = () => {
  const router = createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        { index: true, element: <CharactersPage /> },
        { path: ROUTES.FAVORITES.path, element: <FavoritesPage /> },
      ],
    },
  ]);

  return router;
};
