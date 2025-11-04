import { CharacterList } from "@/entites/character/ui/CharacterList";
import { CharacterCard } from "@/entites/character/ui/CharacterCard";
import { Button } from "@/shared/ui/button";
import { useService } from "@/app/locator/ServiceProvider";
import { reatomComponent } from "@reatom/react";

export const FavoritesPageContent = reatomComponent(() => {
  const charactersStore = useService("CHARACTERS_STORE");

  const favoriteCharacters = charactersStore.favoriteCharacters();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Favorites</h2>
      {favoriteCharacters && favoriteCharacters.length > 0 && (
        <>
          <Button
            onClick={charactersStore.clearFavorites}
            title="Clear all favorites"
          >
            Clear all
          </Button>
          <CharacterList
            characters={favoriteCharacters}
            renderCharacter={(character) => (
              <CharacterCard
                character={character}
                onToggleFavorite={charactersStore.toggleFavorites}
              />
            )}
          />
        </>
      )}
    </div>
  );
});
