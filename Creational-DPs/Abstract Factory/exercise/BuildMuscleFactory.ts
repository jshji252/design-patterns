import { AbstractFactory } from "./AbstractFactory";
import { BuildMuscleMealPlan } from "./BuildMuscleMealPlan";
import { BuildMuscleWorkout } from "./BuildMuscleWorkout";

export class BuildMuscleFactory implements AbstractFactory {
  createMealPlan() {
    return new BuildMuscleMealPlan();
  }
  createWorkoutPlan() {
    return new BuildMuscleWorkout();
  }
}
