import { Technology } from "./technology.model";
import { Mentor } from "./mentor.model";
import { Skill } from "./skill.model";
import { User } from "./user.model";
import { Payment } from "./payment.model";

export class Training {

  id: number;
  status: string;
  progress: number;
  fees: string;
  commissionAmount:number;
  endTime:string;
  amountRecieved:number;
  amountToMentor:number;
  userId:number;
  mentorId:number;
  skillId:number;
  rating:number;
  startDate:string;
  startTime:string;
  users:User[];
  payment:Payment[];
  skill:Skill[];
  technology:Technology;
  mentor:Mentor;
  
}
