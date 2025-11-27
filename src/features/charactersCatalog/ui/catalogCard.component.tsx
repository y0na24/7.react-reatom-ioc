import { CharacterCard } from "@/entites/character/ui/characterCard.component";
import { useCharactersCatalogService } from "../charactersCatalog.injector";
import type { Character } from "@/entites/character/model/types";

export const CatalogCard = ({ character }: { character: Character }) => {
  const { charactersStore } = useCharactersCatalogService();

  return (
    <CharacterCard
      character={character}
      onToggleFavorite={charactersStore.toggleFavorites}
    />
  );
};
