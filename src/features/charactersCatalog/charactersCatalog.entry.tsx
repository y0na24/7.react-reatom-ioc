import { Spinner } from "@/shared/ui/spinner";
import { useCharactersCatalogService } from "./charactersCatalog.injector";

import { CatalogInput } from "./ui/catalogInput.component";
import { CatalogList } from "./ui/catalogList.component";
import { reatomComponent } from "@reatom/react";

export const CharactersCatalogEntry = reatomComponent(() => {
  const {
    charactersStore: { characters },
  } = useCharactersCatalogService();

  return (
    <div className="p-4 mb-4">
      <CatalogInput />

      {!characters.ready() && (
        <Spinner className="flex justify-center mx-auto mt-5" />
      )}

      {characters.data().length > 0 && characters.ready() ? (
        <CatalogList />
      ) : (
        <div className="text-sm text-muted-foreground mt-4">
          Таких персонажей нет
        </div>
      )}
    </div>
  );
});
