import { atom } from "@reatom/core";
import type {
  CharactersRepository,
  FavoriteCharactersRepository,
} from "../repository/types";
import { CharacterModel } from "@/entites/character/model/characters.model";
import type { Character } from "../model/types";

export class CharactersService {
  constructor(
    private readonly charactersRepo: CharactersRepository,
    private readonly favoritesRepo: FavoriteCharactersRepository,
    private readonly characterModel: CharacterModel,
  ) {}

  async getCharacters(name: string = "") {
    const [{ data }, ids] = await Promise.all([
      this.charactersRepo.getCharacters({
        options: { params: { name } },
      }),
      this.favoritesRepo.getFavoriteCharacterIds(),
    ]);

    const characters = CharacterModel.mapDtoToCharacter(data).map(
      (character) => ({
        ...character,
        isFavorite: atom(ids.includes(character.id)),
      }),
    );

    return characters;
  }

  public getFavoriteCharacters(characters: Character[]) {
    return this.characterModel.getFavoriteCharacters(characters);
  }

  public async toggleFavorite(characters: Character[], id: number) {
    await this.favoritesRepo.toggleFavorite(id);

    return this.characterModel.toggleCharacterById(characters, id);
  }

  public async clearFavorites(characters: Character[]) {
    await this.favoritesRepo.clearFavorites();

    return this.characterModel.clearCharacters(characters);
  }
}
