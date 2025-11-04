import { CharactersStore } from "@/entites/character/store/characters.store";
import { Locator } from "./locator";
import { CharactersService } from "@/entites/character/services/character.service";
import { CharacterApi } from "@/entites/character/repository/character.api";
import { FavoritesCharactersStorage } from "@/entites/character/repository/favoriteCharacters.storage";
import { localStoragePersister } from "@/shared/storages/LocalStoragePersister";
import { CharacterModel } from "@/entites/character/model/characters.model";

const charactersService = new CharactersService(
  new CharacterApi(),
  new FavoritesCharactersStorage(localStoragePersister),
  new CharacterModel(),
);

export const locator = new Locator({
  CHARACTERS_STORE: new CharactersStore(charactersService),
} as const);

export type ServiceKey = ReturnType<typeof locator.getKeys>[number];

export function getLocator<T extends ServiceKey>(
  token: T,
): ReturnType<typeof locator.get<T>> {
  return locator.get(token);
}

export function createFeatureLocator<AllowedTokens extends ServiceKey>() {
  return function <T extends AllowedTokens>(token: T) {
    return getLocator(token);
  };
}
