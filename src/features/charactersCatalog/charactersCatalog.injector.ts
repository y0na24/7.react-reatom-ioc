import { CharactersStore } from "@/entites/character/characters.store";
import { createDi } from "@/shared/lib/react";

export type CharactersCatalogDeps = {
  charactersStore: CharactersStore;
};

export const {
  Injector: CharactersCatalogInjector,
  useDi: useCharactersCatalogService,
} = createDi<CharactersCatalogDeps>();