import { faculties } from "./faculties";
import { universities } from "./universities";
import { states } from "./states";
import { degrees } from "./degrees";
import { campuses } from "./campuses";

export type State = (typeof states)[number];
export type University = (typeof universities)[number];
export type Degree = (typeof degrees)[number];

export type CampusUniversity = keyof typeof campuses;
export type Campus = (typeof campuses)[CampusUniversity][number];

export type FacultyUniversity = keyof typeof faculties;
export type Faculty = (typeof faculties)[FacultyUniversity][number];

export { faculties, universities, states, degrees, campuses };
