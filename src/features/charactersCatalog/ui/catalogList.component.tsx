import { CharacterListOptimized } from "@/entites/character/ui/characterListOptimized.component";
import { useCharactersCatalogService } from "../charactersCatalog.injector";
import { CatalogCard } from "./catalogCard.component";
import { reatomComponent } from "@reatom/react";

export const CatalogList = reatomComponent(() => {
  const {
    charactersStore: { characters },
  } = useCharactersCatalogService();

  return (
    <CharacterListOptimized>
      {characters.data().map((char) => (
        <CatalogCard key={char.id} character={char} />
      ))}
    </CharacterListOptimized>
  );
});
