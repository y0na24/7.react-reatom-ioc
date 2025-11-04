import { Input } from "@/shared/ui/input";
import { useDi } from "../di";
import { wrap } from "@reatom/core";
import { reatomComponent } from "@reatom/react";

export const CatalogInput = reatomComponent(() => {
  const {
    charactersStore: { search },
  } = useDi();

  return (
    <Input
      placeholder="Find character by name..."
      value={search()}
      onChange={wrap((e) => search.set(e.target.value))}
    />
  );
});
