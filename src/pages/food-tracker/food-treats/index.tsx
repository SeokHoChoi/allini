import AllList from "@components/foodTreats/all-list";
import PetFoodList from "@components/foodTreats/pet-food-list";
import TreatsList from "@components/foodTreats/treats-list";

export default function FoodTreats() {
  return (
    <>
      <AllList />
      <PetFoodList />
      <TreatsList />
    </>
  );
}
