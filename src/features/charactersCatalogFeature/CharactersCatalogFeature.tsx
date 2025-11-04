import { Spinner } from "@/shared/ui/spinner";
import { useDi } from "./di";

import { CatalogInput } from "./ui/CatalogInput";
import { CatalogList } from "./ui/CatalogList";
import { reatomComponent } from "@reatom/react";

export const CharactersCatalogFeature = reatomComponent(() => {
  const {
    charactersStore: { characters },
  } = useDi();

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
