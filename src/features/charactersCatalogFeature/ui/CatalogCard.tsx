import { CharacterCard } from "@/entites/character/ui/CharacterCard";
import { useDi } from "../di";
import type { Character } from "@/entites/character/model/types";

export const CatalogCard = ({ character }: { character: Character }) => {
  const { charactersStore } = useDi();

  return (
    <CharacterCard
      character={character}
      onToggleFavorite={charactersStore.toggleFavorites}
    />
  );
};
