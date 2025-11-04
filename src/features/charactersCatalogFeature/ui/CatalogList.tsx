import { CharacterListOptimized } from "@/entites/character/ui/CharacterListOptimized";
import { useDi } from "../di";
import { CatalogCard } from "./CatalogCard";
import { reatomComponent } from "@reatom/react";

export const CatalogList = reatomComponent(() => {
  const {
    charactersStore: { characters },
  } = useDi();

  return (
    <CharacterListOptimized>
      {characters.data().map((char) => (
        <CatalogCard key={char.id} character={char} />
      ))}
    </CharacterListOptimized>
  );
});
