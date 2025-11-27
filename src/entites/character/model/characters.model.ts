import type { Character } from "./types";

export class CharactersModel {
  private constructor() {}

  static clearCharacters(characters: Character[]) {
    for (const char of characters) {
      char.isFavorite.set(false);
    }
  }

  static getFavoriteCharacters(characters: Character[]) {
    return characters.filter((c) => c.isFavorite());
  }

  static toggleCharacterById(characters: Character[], id: number) {
    const target = characters.find((c) => c.id === id);

    if (!target) return;

    target.isFavorite.set(!target.isFavorite());
  }
}
