import type { Atom } from "@reatom/core";

export type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  isFavorite: Atom<boolean>;
}
