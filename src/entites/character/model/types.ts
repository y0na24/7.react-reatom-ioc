import type { Atom } from "@reatom/core";

export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  isFavorite: Atom<boolean>;
}
