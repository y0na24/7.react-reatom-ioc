import type { Character } from "../model/types";
import { atom, computed, sleep, withAsyncData, wrap } from "@reatom/core";

type Deps = {
  charactersService: {
    getCharacters(name?: string): Promise<Character[]>;
    getFavoriteCharacters(characters: Character[]): Character[];
    toggleFavorite(characters: Character[], id: number): Promise<void>;
    clearFavorites(characters: Character[]): Promise<void>;
  };
};

export class CharactersStore {
  constructor(private readonly charactersService: Deps["charactersService"]) {}

  search = atom("");

  characters = computed(async () => {
    const query = this.search();

    if (query) {
      await wrap(sleep(1000));
    }

    return await wrap(this.charactersService.getCharacters(query));
  }).extend(withAsyncData({ initState: [] }));

  favoriteCharacters = computed(() =>
    this.charactersService.getFavoriteCharacters(this.characters.data()),
  );

  clearFavorites = async () => {
    await this.charactersService.clearFavorites(this.characters.data());
  };

  toggleFavorites = async (id: Character["id"]) => {
    await this.charactersService.toggleFavorite(this.characters.data(), id);
  };
}
