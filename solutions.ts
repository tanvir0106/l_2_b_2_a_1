const multiplyValue = (value:number  , multiplier?:number): number => {
if(multiplier === undefined) {
    return value * 2
}
return value * multiplier
}






const processInput = (a : string | number | boolean) : string | number =>{
if (typeof a === "string"){
    return a.trim().toLowerCase()
}
else if (typeof a === "number"){
    return a *10
}
else {
     if (a){
        return "Active"
     }
     else{
        return "Inactive"
     }
}
} ;


const formatCoordinate = (args: readonly [latitude : number ,longitude :number , locationName : string ]) : string => {
const [latitude ,longitude ,locationName ] = args;
return `Location: ${locationName} (${latitude}, ${longitude})`}




const concatenateArrays =<T>(...arrays : T[][]) : T[]=>{
    let concatArr :T[]= []
    concatArr = concatArr.concat(...arrays)
    return concatArr

}


interface Course {
    title : string ;
    students : number ;
    isPublished : boolean ;
}



const getPopularCourses =(Courses:Course[]  , minStudents:number ) : Course[] =>{
    const Popcourses = Courses.filter(Course => Course.isPublished ===true && Course.students >=minStudents )
    return Popcourses
}



const pluckValues = <T, K extends keyof T>(items:T[] ,key:K ):T[K][] =>{
    const arr: T[K][] =[]
    for (const i of items){
        arr.push(i[key])
    }
    return arr
}

class Employee {
    protected name : string ;
    private baseSalary : number;
    
    constructor(name:string  , baseSalary:number){
        this.name = name ;
        this.baseSalary = baseSalary ; 
    }
    getDetails():  string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}` ;
    }
}

class Manager extends Employee{
    private department :string ;
    constructor(name:string ,baseSalary:number ,department:string  ){
        super(name,baseSalary)
        this.department= department;
    }

    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`;

    }
}




 

const validateAgeAsync = async (age: number): Promise<string> => {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return "Access Granted"; 
};



