import { atom } from "@reatom/core";
import { type CharactersDTO } from "@/shared/dto/characterDto";
import { type Character } from "./types";

export class CharactersBuilder {
  private characters: Character[] = [];

  fromDto(dto: CharactersDTO): CharactersBuilder {
    if (!dto.results) {
      this.characters = [];
      return this;
    }

    this.characters = dto.results.map((r) => ({
      id: r.id,
      name: r.name,
      image: r.image,
      status: r.status,
      species: r.species,
      isFavorite: atom(false),
    }));

    return this;
  }

  withApplyFavoriteIds(favoriteIds: number[]) {
    this.characters = this.characters.map((char) => ({
      ...char,
      isFavorite: atom(favoriteIds.includes(char.id)),
    }));

    return this;
  }

  build(): Character[] {
    return this.characters;
  }
}
