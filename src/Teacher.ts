import {User} from './User'
import { FileManager } from './FileManager'

export enum TEACHER_SPECIALTY {
    //obriga a escolher uma das opções abaixo nas especialidades do professor.
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
}