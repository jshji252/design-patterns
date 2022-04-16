import { AbstractFactory } from "./AbstractFactory";

export class HomePage {
  setGoal(goal: AbstractFactory) {
    console.log(goal.createMealPlan());
    console.log(goal.createWorkoutPlan());
  }
}
