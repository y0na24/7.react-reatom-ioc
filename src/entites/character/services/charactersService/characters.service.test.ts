import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { container } from "@/app/container/container";
import { CharactersService } from "./characters.service";
import {
  CHARACTERS_REPOSITORY_TOKEN,
  FAVORITES_REPOSITORY_TOKEN,
} from "../../repository/types";

const testContainer = container.createChild();

const charactersRepoMock = { getCharacters: vi.fn() };
const favoritesRepoMock = {
  getFavoriteCharacterIds: vi.fn(),
  toggleFavorite: vi.fn(),
  clearFavorites: vi.fn(),
};

testContainer.bindAll(
  { provide: CHARACTERS_REPOSITORY_TOKEN, useValue: charactersRepoMock },
  { provide: FAVORITES_REPOSITORY_TOKEN, useValue: favoritesRepoMock },
);

describe("CharactersService.getCharacters", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  afterEach(() => {
    testContainer.unbindAll();
  });

  test("возвращает персонажей и правильно ставит isFavorite", async () => {
    charactersRepoMock.getCharacters.mockResolvedValue({
      data: {
        results: [
          {
            id: 1,
            name: "Rick Sanchez",
            image: "rick.jpg",
            status: "Alive",
            species: "Human",
          },
          {
            id: 2,
            name: "Morty Smith",
            image: "morty.jpg",
            status: "Alive",
            species: "Human",
          },
          {
            id: 3,
            name: "Summer Smith",
            image: "summer.jpg",
            status: "Alive",
            species: "Human",
          },
        ],
      },
    });

    favoritesRepoMock.getFavoriteCharacterIds.mockResolvedValue([1]);

    const service = testContainer.get(CharactersService);
    const result = await service.getCharacters("rick");

    expect(result).toHaveLength(3);
    expect(result[0].isFavorite()).toBe(true);
  });
});
