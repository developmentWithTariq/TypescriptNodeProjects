
export type ShowStatus ={
    enrolledCourses: eCourses,
    studentName: string,
    studentBalance: number,
    id: number
    
}
export type eCourses = {
    AI: boolean,
    CNC: boolean,
    IOT: boolean
}
export enum Courses {
    course1 = "AI",
    course2 = "CNC",
    course3 = "IOT",
}

export type StudentDetail= {
    studentName: string,
    status: ShowStatus 
}
export type Status =  Map<number,ShowStatus>;
export type StudentInfo = {
    name: string,
    id : number
}
export type EnrolledCourses = Map<number,eCourses>