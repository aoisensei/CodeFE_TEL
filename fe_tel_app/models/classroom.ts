import { ClassEvent } from "./classevent";

export type Classroom = {
  id: number;
  code: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  classEvent?: ClassEvent[]; 

};