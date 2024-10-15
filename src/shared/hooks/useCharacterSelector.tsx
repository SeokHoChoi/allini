import { useState } from "react";

interface Character {
  path: string;
  label: string;
}

export function useCharacterSelector(characters: Character[]) {
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(
    characters[0]
  );

  const selectCharacter = (character: Character) => {
    setSelectedCharacter(character);
  };

  return { selectedCharacter, selectCharacter };
}
