import { CharacterApi } from "@/entites/character/repository/character.api";
import { FavoritesCharactersStorage } from "@/entites/character/repository/favoriteCharacters.storage";
import { Container, type Token } from "@needle-di/core";

import { LocalStoragePersister } from "@/shared/storages/LocalStoragePersister";
import { CHARACTERS_REPOSITORY_TOKEN, FAVORITES_REPOSITORY_TOKEN } from "@/entites/character/repository/types";
import { KEY_VALUE_STORAGE_TOKEN } from "@/shared/storages/types";

export const container = new Container();

container.bindAll(
  {
    provide: CHARACTERS_REPOSITORY_TOKEN,
    useClass: CharacterApi,
  },
  {
    provide: FAVORITES_REPOSITORY_TOKEN,
    useClass: FavoritesCharactersStorage,
  },
  {
    provide: KEY_VALUE_STORAGE_TOKEN,
    useClass: LocalStoragePersister,
  },
);

export const useService = <T>(token: Token<T>) => {
  return container.get(token);
};
