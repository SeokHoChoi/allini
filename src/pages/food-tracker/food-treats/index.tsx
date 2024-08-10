import AllList from "@features/foodTreats/all-list";
import PetFoodList from "@features/foodTreats/pet-food-list";
import TreatsList from "@features/foodTreats/treats-list";

export default function FoodTreats() {
  return (
    <>
      <AllList />
      <PetFoodList />
      <TreatsList />
    </>
  );
}
