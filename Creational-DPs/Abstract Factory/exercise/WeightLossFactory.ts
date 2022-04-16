import { AbstractFactory } from "./AbstractFactory";
import { WeightLossMealPlan } from "./WeightLossMealPlan";
import { WeightLossWorkout } from "./WeightLossWorkout";

export class WeightLossFactory implements AbstractFactory {
  createMealPlan() {
    return new WeightLossMealPlan();
  }
  createWorkoutPlan() {
    return new WeightLossWorkout();
  }
}
