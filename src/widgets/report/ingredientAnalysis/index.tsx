import clsx from "clsx";
import styles from "./index.module.scss";

interface Ingredient {
  name: string;
  percentage: number;
  color: string;
  allergyLevel: "low" | "medium" | "high";
}

interface IngredientAnalysisProps {
  ingredients?: Ingredient[];
}

const IngredientAnalysis = ({
  ingredients = [
    { name: "닭고기", percentage: 48, color: "#E8805F", allergyLevel: "low" },
    {
      name: "소고기",
      percentage: 32,
      color: "#7FB5B5",
      allergyLevel: "medium",
    },
    {
      name: "돼지고기",
      percentage: 10,
      color: "#9B6B6B",
      allergyLevel: "high",
    },
    { name: "연어", percentage: 6, color: "#E5A283", allergyLevel: "low" },
    { name: "양고기", percentage: 4, color: "#B4D7D7", allergyLevel: "medium" },
  ],
}: IngredientAnalysisProps) => {
  const allergyLevels = [
    { level: "low", label: "알레르기 낮음" },
    { level: "medium", label: "알레르기 보통" },
    { level: "high", label: "알레르기 높음" },
  ];

  return (
    <div className={clsx(styles.container)}>
      <h2 className={clsx(styles.title)}>성분 조회</h2>

      <div className={clsx(styles.barGraphContainer)}>
        {ingredients.map((ingredient, index) => (
          <div
            key={`bar-${index}`}
            className={styles.bar}
            style={{
              backgroundColor: ingredient.color,
              width: `${ingredient.percentage}%`,
            }}
          />
        ))}
      </div>

      <div className={clsx(styles.ingredientsList)}>
        {ingredients.map((ingredient, index) => (
          <div
            key={`ingredient-${index}`}
            className={clsx(styles.ingredientItem)}
          >
            <div className={clsx(styles.ingredientInfo)}>
              <div
                className={clsx(styles.colorDot)}
                style={{ backgroundColor: ingredient.color }}
              />
              <span className={clsx(styles.ingredientName)}>
                {ingredient.name}
              </span>
            </div>
            <span className={clsx(styles.percentage)}>
              {ingredient.percentage}%
            </span>
          </div>
        ))}
      </div>

      <div className={clsx(styles.allergyLevels)}>
        {allergyLevels.map((level, index) => (
          <div key={`allergy-${index}`} className={clsx(styles.allergyItem)}>
            <div
              className={styles.allergyDot}
              style={{
                backgroundColor: ingredients.find(
                  (i) => i.allergyLevel === level.level
                )?.color,
              }}
            />
            <span className={clsx(styles.allergyLabel)}>{level.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientAnalysis;
