import { 
    StudentInfo,EnrolledCourses,
    eCourses, Status,
    ShowStatus,StudentDetail,Courses
     } from "./types.js";

export class StudentsManagmentSystem {
    
    private studentList: StudentInfo[] = [];
    private enrollCourses:EnrolledCourses  = new Map<number ,eCourses>().set(0,{
        AI: false,
        CNC: false,
        IOT: false});
    
    private status: Status= new Map<number, ShowStatus>();
   
    
    private studentDetails = new Map<number, StudentDetail>().set(0,{
        studentName:"",
        status: this.status.get(0)
    });
    
    
    

    getStudents(): StudentInfo[] {
        return this.studentList;
    }
    addStudent(id: number ,studentName: string):void{

        if(!this.studentList.find(std => std.name === studentName)){
            this.studentList.push({id,name:studentName});
        }

        this.enrollCourses.set(id,this.enrollCourses.get(0));
        this.status.set(id, {
            enrolledCourses: this.enrollCourses.get(id),
            studentName: studentName,
            studentBalance: 0,
            id
        })
        this.studentDetails.set(id,{
            studentName,
            status: this.status.get(id)
        });
    }
    enroll(id: number,courseName: string): boolean {
        let isStd: boolean = this.isStudent(id)
        if(isStd){
            let isEnrolled: boolean = this.isEnrolled(id,courseName)
            if(isEnrolled){
                return false; 
            }
            else{
                let studentName = this.studentList.find( std =>std.id === id)
                switch (courseName) {
                    case Courses.course1:
                        this.enrollCourses.set(id,{
                            AI: true,
                            CNC: this.isEnrolled(id,"CNC"),
                            IOT: this.isEnrolled(id,"IOT"),
                        });
                        this.status.set(id,{
                            enrolledCourses: this.enrollCourses.get(id) ,
                            studentName: studentName.name,
                            studentBalance: this.status.get(id).studentBalance,
                            id
                        })
                        this.status.get(id).studentBalance += 200;
                        break;
                    case Courses.course2:
                        this.enrollCourses.set(id,{
                            AI: this.isEnrolled(id,"AI"),
                            CNC: true,
                            IOT: this.isEnrolled(id,"IOT")
                        });
                        this.status.set(id,{
                            enrolledCourses: this.enrollCourses.get(id) ,
                            studentName: studentName.name,
                            studentBalance: this.status.get(id).studentBalance,
                            id
                        })
                        this.status.get(id).studentBalance += 200;
                        break;
                    case Courses.course3:
                        this.enrollCourses.set(id,{
                            AI: this.isEnrolled(id,"AI"),
                            CNC: this.isEnrolled(id,"CNC"),
                            IOT: true 
                        });
                        this.status.set(id,{
                            enrolledCourses: this.enrollCourses.get(id) ,
                            studentName: studentName.name,
                            studentBalance: this.status.get(id).studentBalance,
                            id
                        })
                        this.status.get(id).studentBalance += 200;
                        break; 
                }
                this.studentDetails.set(id,{
                    studentName: studentName.name,
                    status: this.status.get(id)
                })
                return true; 
            }
        }
        
    }
    payFee(id: number,courseName: string[], ):boolean{
        let studentName = this.studentList.find(std=>std.id === id)
        for(let i: number = 0; i<courseName.length; i++){
            let isEnrolled:boolean = this.isEnrolled(id, courseName[i]);
            if(isEnrolled){
                this.status.get(id).studentBalance -= 200
                this.studentDetails.set(id,{
                    studentName: studentName.name,
                    status: this.status.get(id)
                })
                return true;
            }
            else {
                return false;
            }
        }
    }
    viewBalance(id:number): number{
        return this.status.get(id).studentBalance;
    }
    isEnrolled(id: number, courseName: string): boolean{
        let idStd: boolean = this.isStudent(id);
        if(idStd){
            let eCourses:eCourses = this.enrollCourses.get(id);
            switch (courseName) {
                case Courses.course1:
                    return eCourses.AI;
                case Courses.course2:
                    return eCourses.CNC;

                case Courses.course3:
                    return eCourses.IOT;
            }
        }else{
            return false;
        }
    }
    checkStatus(id: number): ShowStatus | undefined{
        if(this.studentList.find(std=> std.id === id) === undefined){
            return this.studentDetails.get(id).status;
        }
        return this.studentDetails.get(id).status;
    }
    isStudent(id: number): boolean{
        let isSTd: StudentInfo | undefined = this.studentList.find(std=>std.id === id);
        return !!isSTd;
    }
}


















// type Course ={
//     enrolledCourses: dd,
//     studentName: string,
//     feePaid: boolean,
//     courseFee: number,
//     studentBalance: number
    
// }

// type EnrolledCourses = string[];
// type dd = {
//     AI: boolean,
//     CNC: boolean,
//     IOT: boolean
// }
// enum Courses {
//     course1 = "AI",
//     course2 = "CNC",
//     course3 = "IOT",
// }

// type StudentDetail= {
//     studentName: string,
//     status: Course 
// }

// type Status =  Map<number,Course>;
// type s = {
//     name: string,
//     id : number
// }
// type eT = Map<number,dd>
// export class StudentsManagmentSystem {
//     // public enrolledCourses:EnrolledCourses;
//     public enrollCourses:eT  = new Map<number ,{AI: boolean,CNC: boolean,IOT: boolean}>().set(0,{AI: false,CNC: false,IOT: false});
    
//     // enrollCourses.set(3,{
//     //     c: "k",
//     //     c3: "df"
//     // })
//     public status: Status= new Map<number, Course>();
   
    
//     public studentDetails = new Map<number, StudentDetail>().set(0,{
//         studentName:"",
//         status: this.status.get(0)
//     });
//     // })
    
//     public studentList: s[] = [];
    

//     getStudents(): s[] {
//         return this.studentList;
//             }
//     addStudent(id: number ,studentName: string):void{
//         if(!this.studentList.find(std=>std.name === studentName)){
//             this.studentList.push({id,name:studentName});
//         }
//         this.enrollCourses.set(id,this.enrollCourses.get(0))
//         this.status.set(id, {
//             enrolledCourses: this.enrollCourses.get(id),
//             studentName: studentName,
//             feePaid: false,
//             courseFee: 0,
//             studentBalance: 0
//         })
//         // console.log(this.studentList)
//         this.studentDetails.set(id,{
//             studentName,
//             status: this.status.get(id)
//         });
//     }
//     enroll(id: number,courseName: string) {
//         // const prompt = await inquirer.createPromptModule()({type:"list",name:"answer",message:"What you want do.", choices:["AI","CNC","IOT"]})
//         // prompt["answer"]
//         let isStd: boolean = this.isStudent(id)
//         if(isStd){
//             let isEn:boolean = this.isEnrolled(id,courseName)
//             if(isEn){
//                 return false; 
//             }
//             else{
//                 let studentName = this.studentList.find((std)=>std.id === id)
//                 switch (courseName) {
//                     case Courses.course1:
//                         this.enrollCourses.set(id,{
//                             AI: true,
//                             CNC: this.isEnrolled(id,"CNC"),
//                             IOT: this.isEnrolled(id,"IOT"),
//                         });
//                         this.status.set(id,{
//                             enrolledCourses: this.enrollCourses.get(id) ,
//                             studentName: studentName.name,
//                             feePaid: false,
//                             courseFee: 0,
//                             studentBalance: this.status.get(id).studentBalance
//                         })
//                         this.status.get(id).courseFee += 200;
//                         this.status.get(id).studentBalance += 200;
//                         break;
//                     case Courses.course2:
//                         this.enrollCourses.set(id,{
//                             AI: this.isEnrolled(id,"AI"),
//                             CNC: true,
//                             IOT: this.isEnrolled(id,"IOT")
//                         });
//                         this.status.set(id,{
//                             enrolledCourses: this.enrollCourses.get(id) ,
//                             studentName: studentName.name,
//                             feePaid: false,
//                             courseFee: 0,
//                             studentBalance: this.status.get(id).studentBalance
//                         })
//                         this.status.get(id).courseFee += 200;
//                         this.status.get(id).studentBalance += 200;
//                         break;
//                     case Courses.course3:
//                         this.enrollCourses.set(id,{
//                             AI: this.isEnrolled(id,"AI"),
//                             CNC: this.isEnrolled(id,"CNC"),
//                             IOT: true 
//                         });
//                         this.status.set(id,{
//                             enrolledCourses: this.enrollCourses.get(id) ,
//                             studentName: studentName.name,
//                             feePaid: false,
//                             courseFee: 0,
//                             studentBalance: this.status.get(id).studentBalance
//                         })
//                         this.status.get(id).courseFee += 200;
//                         this.status.get(id).studentBalance += 200;
//                         break; 
//                 }
//                 // let cr = this.enrollCourses.get(id)
                
                
//                 // if( this.enrollCourses.get(id).AI ){
//                 //     this.status.get(id).courseFee += 200;
//                 //     this.status.get(id).studentBalance += 200;

//                 // }
//                 // if( this.enrollCourses.get(id).CNC ){
//                 //     this.status.get(id).courseFee += 200;
//                 //     this.status.get(id).studentBalance += 200;
//                 // }
//                 // if (this.enrollCourses.get(id).IOT){
//                 //     this.status.get(id).courseFee += 200;
//                 //     this.status.get(id).studentBalance += 200;
//                 // }
//                 this.studentDetails.set(id,{
//                     studentName: studentName.name,
//                     status: this.status.get(id)
//                 })
//                 return true; 
//             }
//         }
        
//     }
//     payFee(id: number,courseName: string[], ):boolean{
//         let studentName = this.studentList.find(std=>std.id === id)
//         for(let i = 0; i<courseName.length; i++){
//             let c:boolean = this.isEnrolled(id, courseName[i]);
//             if(c){
//                 this.status.get(id).studentBalance -= 200
//                 this.studentDetails.set(id,{
//                     studentName: studentName.name,
//                     status: this.status.get(id)
//                 })
//                 return  true;
//             }
//             else {
//                 return false;
//             }
//         }
//         return
//         // this.studentDetails.set(id,{
//         //         studentName: studentName.name,
//         //         status: this.status.get(id)
//         //     })
//         // let isEnrolled = this.enrolledCourses.find(courseNam=>courseNam === courseName )
//         // if(isEnrolled != undefined  ){
//             // let studentName = this.studentList.find(std=>std.id === id)
//             // // console.log(studentName)
//             // if(courseName.length === 1){
//             //     this.status.get(id).studentBalance - 200

//             // }
//             // else if(courseName.length === 2){
//             //     this.status.get(id).studentBalance -= 400
//             // }
//             // else if(courseName.length === 3){
//             //     this.status.get(id).studentBalance -600
//             // }
//             // this.studentDetails.set(id,{
//             //     studentName: studentName.name,
//             //     status: this.status.get(id)
//             // })
        
        
//     }
//     viewBalance(id:number): number{
//         return this.status.get(id).studentBalance;
//     }
//     isEnrolled(id: number, courseName: string): boolean{

//         let idStd:boolean = this.isStudent(id)
//         if(idStd){
//             let checkE:dd = this.enrollCourses.get(id);
//             switch (courseName) {
//                 case Courses.course1:
//                     return checkE.AI;
//                 case Courses.course2:
//                     return checkE.CNC

//                 case Courses.course3:
//                     return checkE.IOT
                
//             }
//         }else{

//             return false;
//         }
//     }
//     checkStatus(id: number):Course | undefined{
//         if(this.studentList.find(std=> std.id === id) === undefined){
//             console.log("you are not registered in our university")
//         }
//         return this.studentDetails.get(id).status;
//     }
//     isStudent(id: number){
//         let isSTd: s | undefined = this.studentList.find(std=>std.id === id);
        
//         return !!isSTd;
//     }
// }