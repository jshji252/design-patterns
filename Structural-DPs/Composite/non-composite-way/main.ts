import { Group } from "./Group";
import { Shape } from "./Shape";

const group1 = new Group();

group1.add(new Shape()); // square
group1.add(new Shape()); // square

const group2 = new Group();

group2.add(new Shape()); // circle
group2.add(new Shape()); // circle

const group3 = new Group();

group3.add(group1); // should throw error, because Group.add expects a Shape, not a group
group3.add(group2); // should throw error, because Group.add expects a Shape, not a group

group3.render();
