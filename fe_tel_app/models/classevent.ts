import { Comment } from "./comment";
import { Question } from "./question";
import { Classroom } from "./classroom";

export type ClassEvent = {
  id: number;
  classroomId: number;
  code: string;
  name: string;
  isNotification: boolean;
  description?: string;
  order: boolean;
  createdAt: Date;
  endAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  comment?: Comment[]; 
  question?: Question[]; 
  classroom: Classroom; 

};