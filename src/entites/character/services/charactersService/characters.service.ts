import { type Character } from "../../model/types";
import { inject, injectable } from "@needle-di/core";
import {
  CHARACTERS_REPOSITORY_TOKEN,
  FAVORITES_REPOSITORY_TOKEN,
} from "../../repository/types";
import { CharactersModel } from "../../model/characters.model";
import { CharactersBuilder } from "../../model/characters.builder";

@injectable()
export class CharactersService {
  constructor(
    private readonly charactersRepo = inject(CHARACTERS_REPOSITORY_TOKEN),
    private readonly favoritesRepo = inject(FAVORITES_REPOSITORY_TOKEN),
  ) {}

  async getCharacters(name: string = "") {
    const [{ data }, ids] = await Promise.all([
      this.charactersRepo.getCharacters({
        options: { params: { name } },
      }),
      this.favoritesRepo.getFavoriteCharacterIds(),
    ]);

    return new CharactersBuilder()
      .fromDto(data)
      .withApplyFavoriteIds(ids)
      .build();
  }

  public getFavoriteCharacters(characters: Character[]) {
    return CharactersModel.getFavoriteCharacters(characters);
  }

  public async toggleFavorite(characters: Character[], id: number) {
    await this.favoritesRepo.toggleFavorite(id);

    return CharactersModel.toggleCharacterById(characters, id);
  }

  public async clearFavorites(characters: Character[]) {
    await this.favoritesRepo.clearFavorites();

    return CharactersModel.clearCharacters(characters);
  }
}
