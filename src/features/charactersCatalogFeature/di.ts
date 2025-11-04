import { createStrictContext } from "@/shared/lib/helpers/createStrictContext";
import { useStrictContext } from "@/shared/lib/hooks/useStrictContext";

import { CharactersStore } from "@/entites/character/store/characters.store";

export type CharactersCatalogDeps = {
  charactersStore: CharactersStore;
};

export const charactersCatalogInjector =
  createStrictContext<CharactersCatalogDeps>();
export const useDi = () => useStrictContext(charactersCatalogInjector);
