export class Quiz{
    id:number;
    question:string;
    answers:Answer[];
    rightAnswer:number;
    userChoose:number=0;
   }
   
   export class Answer{
       id:number;
       answer:string;
   }