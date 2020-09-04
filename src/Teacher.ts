import {User} from './User'
import { FileManager } from './FileManager'

export enum TEACHER_SPECIALTY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND",
}

export class Teacher implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public specialties: TEACHER_SPECIALTY[]
    ) {
        this.id = id,
        this.name = name,
        this.email = email,
        this.specialties = specialties
        
    }

    public writeToData(): void {
        const fm = new FileManager("teachers.json");
        const data = fm.readFile()
        const newTeacher = {
            id: this.id,
            name: this.name,
            email: this.email,
            specialties: this.specialties
        }
        const teachers = [...data, newTeacher]
        fm.writeFile(teachers)
    }


}