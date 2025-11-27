import { type Character } from "./model/types";
import { atom, computed, sleep, withAsyncData, wrap } from "@reatom/core";
import { inject, injectable } from "@needle-di/core";
import { CharactersService } from "./services/charactersService/characters.service";

@injectable()
export class CharactersStore {
  constructor(private readonly charactersService = inject(CharactersService)) {}

  search = atom("");

  characters = computed(async () => {
    const query = this.search();

    if (query) {
      await wrap(sleep(200));
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
