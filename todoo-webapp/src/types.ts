export class Task{
    description:string = "";
    
    isFinished:boolean = false;
    
    constructor(desc:string,isFinished:boolean=false){
        this.description = desc;
        this.isFinished = isFinished;
    }

    setFinished(isFinished:boolean) {
        this.isFinished = isFinished;
    }
}

export class User{
    name: string;
    surname: string;
    username:string;
    password:string;
    email:string;
    daily:Task[] = [];
    travel:Task[] = [];

    constructor(name:string,surname:string,username:string,password:string,email:string){
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.name = name;
        this.password = password;
        this.email = email;
    }
    
    static getCurrentUser() {
        let user: string | null = localStorage.getItem("current-user");
        if (user !== null) {
            return JSON.parse(user);
        }
        return null;
    }

    static loginUser(user:User){
        localStorage.setItem("current-user",JSON.stringify(user));
    }
    saveUser(){
        localStorage.setItem(this.username,JSON.stringify(this));
    }
    
}


export interface UserProp {
    user: User | null;
    setUser: (user: User | null) => void;
}
  