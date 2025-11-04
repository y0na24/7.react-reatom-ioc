import { atom } from "@reatom/core";
import type { CharactersDTO } from "@/shared/dto/characterDto";
import type { Character } from "./types";

export class CharacterModel {
  constructor() {}

  public clearCharacters(characters: Character[]) {
    for (const char of characters) {
      char.isFavorite.set(false);
    }
  }

  public getFavoriteCharacters(characters: Character[]) {
    return characters.filter((c) => c.isFavorite());
  }

  public toggleCharacterById(characters: Character[], id: number) {
    const target = characters.find((c) => c.id === id);

    if (!target) return;

    target.isFavorite.set(!target.isFavorite());
  }

  public static mapDtoToCharacter = (
    charactersDto: CharactersDTO,
  ): Character[] => {
    if (!charactersDto.results) return [];

    return charactersDto.results.map((result) => ({
      id: result.id,
      name: result.name,
      image: result.image,
      status: result.status,
      species: result.species,
      isFavorite: atom(false),
    }));
  };
}
