import clsx from "clsx";
import styles from "./index.module.scss";
import { useCharacterSelector } from "@hooks/useCharacterSelector";

interface Characters {
  path: string;
  label: string;
}

interface CharacterSelectorProps {
  className?: string;
  characters: Characters[];
  selectedCharacter: Characters;
  onSelectCharacter: (character: Characters) => void;
}

export default function CharacterSelector({
  className,
  characters,
  selectedCharacter,
  onSelectCharacter,
}: CharacterSelectorProps) {
  return (
    <div className={clsx(styles.tabArea, className)}>
      <nav role="tablist" aria-label="Character Selector">
        <ul className={clsx(styles.tabWrapper)}>
          {characters.map((character) => (
            <li key={character.path} role="presentation">
              <button
                onClick={() => onSelectCharacter(character)}
                className={clsx({
                  [styles.selected]: selectedCharacter.path === character.path,
                })}
                id={`tab-${character.path}`}
                aria-controls={`panel-${character.path}`}
              >
                {character.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
