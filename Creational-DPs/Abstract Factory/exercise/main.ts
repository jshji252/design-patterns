import { BuildMuscleFactory } from "./BuildMuscleFactory";
import { HomePage } from "./HomePage";
import { WeightLossFactory } from "./WeightLossFactory";

const hP = new HomePage();
hP.setGoal(new WeightLossFactory());

console.log("change goal");

hP.setGoal(new BuildMuscleFactory());
