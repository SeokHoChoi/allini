import clsx from "clsx";
import styles from "./index.module.scss";
import Treats from "@assets/icons/treats.svg";
import Food from "@assets/icons/food.svg";
import Badge from "@ui/badge";

interface FoodCardProps {
  data: {
    imageSrc?: string;
    labels: string[];
    brand: string;
    foodName: string;
    ingredients: string[];
  };
  className?: string;
}

export default function FoodCard({ data, className }: FoodCardProps) {
  const { imageSrc, labels, brand, foodName, ingredients } = data;

  return (
    <div className={clsx(styles.foodCard, className)}>
      <div className={clsx(styles.imageContainer)}>
        <img
          src={imageSrc || "/path/to/placeholder-image.png"}
          alt="Dog Food"
          className={clsx(styles.foodImage)}
        />
        <div className={clsx(styles.labelIcon)}>
          <Food />
          <Treats />
        </div>
      </div>
      <div className={clsx(styles.infoContainer)}>
        <Badge labels={labels} />

        <div className={clsx(styles.details)}>
          <div className={clsx(styles.brand)}>{brand}</div>
          <div className={clsx(styles.foodName)}>{foodName}</div>
          <div className={clsx(styles.ingredients)}>
            {ingredients.join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
}
