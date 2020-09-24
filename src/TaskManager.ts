import { Student } from "./Student";
import { FileManager } from "./FileManager";
import { Mission } from "./Mission";
import {Teacher} from './Teacher';
import moment from 'moment';

export class TaskManager {   
    private students: Student[] = [];
    private teachers: Teacher[] = [];
    private missions: Mission[] = [];
    constructor(

    ) {
        const stud = new FileManager('students.json')
        const teach = new FileManager('teachers.json')
        const miss = new FileManager('missions.json')
        this.students = stud.readFile()
        this.teachers = teach.readFile()
        this.missions = miss.readFile()
    }
    
    public createStudent(student: Student): void {
        const duplicateStudent: Student | undefined = this.students.find(
            (item: any) => {
                return item.id === student.id
            }
        )
        if(duplicateStudent) {
            console.log("Já existe um estudante com este id!")
        } else {
            const stud = new FileManager('students.json')
            this.students.push(student);
            stud.writeFile(this.students)
            console.log("Estudante adicionado na database com sucesso!")
        }
    }

    public createTeacher(teacher: Teacher): void {
        const duplicateTeacher: Teacher | undefined = this.teachers.find(
            (item: any) => {
                return item.id === teacher.id
            }
        )
        if(duplicateTeacher) {
            console.log("Já existe um professor cadastrado com este Id!")
        } else {
            const teach = new FileManager('teachers.json');
            this.teachers.push(teacher);
            teach.writeFile(this.teachers)
            console.log("Professor adicionado na database com sucesso!")
        }
    }

    public createMission(mission: Mission): void {
        const duplicateMission: Mission | undefined = this.missions.find(
            (item: any) => {
                return item.name === mission.getName()
            }
        )
        if(duplicateMission) {
            console.log("Já existe uma missão cadastrada com este nome!")
        } else if (mission.getName() === ""){
            console.log("Nome da missão não foi definida.")
        } else {
            const miss = new FileManager('missions.json')
            this.missions.push(mission)
            miss.writeFile(this.missions)
            console.log("Missão adicionada na database com sucesso!")
        }
    }
    
    public getStudentAgeById(id: string): number | undefined {
        const filteredStudent: Student[] | undefined = this.students.filter(
            (item: any) => {
                if(id === item.id) {
                    return item
                }
            }
        )
        
        if(filteredStudent) {
            const today = moment()
            const age = today.diff(moment(filteredStudent[0].birthDate), "years")
            return age
        } else {
            return undefined
        }
    }

    public getStudents(): any {
        this.missions.map((item) => {
            // const arrayStudents = item.getStudents()

            // arrayStudents.map((student: Student) => {
            //     return console.log(`
            //         Nome: ${student.name}
            //         Email: ${student.email}
            //         // Missão: ${item.getName()}
            //         // Idade: ${student.getAge()}
            //     `)
            // })
        })
    }
}