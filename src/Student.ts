import {User} from './User'
import moment from 'moment'
import {FileManager} from './FileManager'

export class Student implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public hobbies: string[]
    ){
        const fm = new FileManager("students.json");
        const data = fm.readFile()
        const newStudent = {
            id: this.id,
            name: this.name,
            email: this.email,
            hobbies: this.hobbies
        }
        const dataBase = [...data, newStudent]

        console.log(data.includes(this.id))

    //     if (data.indexOf(this.id) !== -1) {
    //         fm.writeFile(dataBase)
    //         console.log("Estudante Cadastrado com Sucesso!")
    //     }
    //     else{
    //         console.log(`Estudante ${this.name} já cadastrado!`)
    //     }
    // }
    
}
}