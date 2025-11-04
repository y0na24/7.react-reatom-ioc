import { useService } from "@/app/locator/ServiceProvider";
import { CharactersCatalogFeature } from "@/features/charactersCatalogFeature/CharactersCatalogFeature";
import { charactersCatalogInjector } from "@/features/charactersCatalogFeature/di";

export function CharactersPageContent() {
  const charactersStore = useService("CHARACTERS_STORE");

  return (
    <charactersCatalogInjector.Provider
      value={{
        charactersStore,
      }}
    >
      <CharactersCatalogFeature />
    </charactersCatalogInjector.Provider>
  );
}
