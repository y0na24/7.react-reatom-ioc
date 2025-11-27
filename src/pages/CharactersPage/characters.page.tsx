import { useService } from "@/app/container/container";
import { CharactersStore } from "@/entites/character/characters.store";
import { CharactersCatalogEntry } from "@/features/charactersCatalog/charactersCatalog.entry";
import { CharactersCatalogInjector } from "@/features/charactersCatalog/charactersCatalog.injector";

export const CharactersPage = () => {
  const charactersStore = useService(CharactersStore);

  return (
    <CharactersCatalogInjector
      value={{
        charactersStore,
      }}
    >
      <CharactersCatalogEntry />
    </CharactersCatalogInjector>
  );
};
