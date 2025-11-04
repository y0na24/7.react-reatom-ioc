import { withServices } from "@/app/locator/ServiceProvider";
import { FavoritesPageContent } from "./FavoritesPageContent";

export const FavoritesPage = withServices(["CHARACTERS_STORE"])(
  FavoritesPageContent,
);
