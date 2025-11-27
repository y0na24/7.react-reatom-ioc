import { Input } from "@/shared/ui/input";
import { useCharactersCatalogService } from "../charactersCatalog.injector";
import { wrap } from "@reatom/core";
import { reatomComponent } from "@reatom/react";

export const CatalogInput = reatomComponent(() => {
  const {
    charactersStore: { search },
  } = useCharactersCatalogService();

  return (
    <Input
      placeholder="Find character by name..."
      value={search()}
      onChange={wrap((e) => search.set(e.target.value))}
    />
  );
});
