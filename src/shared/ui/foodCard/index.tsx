import clsx from "clsx";
import styles from "./index.module.scss";
import Treats from "@assets/icons/treats.svg";
import Dog from "@assets/icons/dog.svg";
import Food from "@assets/icons/food.svg";
import Badge from "@ui/badge";
import TmpImg from "@assets/images/allini/pg2.jpeg";

interface FoodCardProps {
  data: {
    id: string | number;
    imageSrc?: string;
    labels: string[];
    brand: string;
    foodName: string;
    ingredients: string[];
  };
  className?: string;
}

export default function FoodCard({ data, className }: FoodCardProps) {
  const { id, imageSrc, labels, brand, foodName, ingredients } = data;

  return (
    <li className={clsx(styles.foodCard, className)}>
      <div className={clsx(styles.imageContainer)}>
        <img
          src={imageSrc || TmpImg}
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

          <Dog className={clsx(styles.bgDog)} />
        </div>
      </div>
    </li>
  );
}
