import type { ApiResponse, RequestConfig } from "@/shared/api/HttpClient";
import type { CharactersDTO } from "@/shared/dto/characterDto";
import { InjectionToken } from "@needle-di/core";

export type CharactersRepository = {
  getCharacters(config?: RequestConfig): ApiResponse<CharactersDTO>;
};

export const CHARACTERS_REPOSITORY_TOKEN =
  new InjectionToken<CharactersRepository>("CHARACTERS_REPOSITORY");

export type FavoriteCharactersRepository = {
  getFavoriteCharacterIds: () => Promise<number[]>;
  toggleFavorite: (id: number) => Promise<void>;
  clearFavorites: () => Promise<void>;
};

export const FAVORITES_REPOSITORY_TOKEN =
  new InjectionToken<FavoriteCharactersRepository>("FAVORITES_REPOSITORY");
