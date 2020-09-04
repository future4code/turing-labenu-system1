import { Teacher } from './Teacher'
import { TEACHER_SPECIALTY } from './Teacher'
import { Student } from './Student'
import moment from 'moment'
import { FullTimeMission } from './FullTimeMission'
import { NightMission } from './NightMission'

const Mateus: Teacher = new Teacher("a1", "Mateus", "mateus@gmail.com", [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT])
const Vinicius: Student = new Student("b2", "Vinicius", "vini@gmail.com", moment("23/10/2000", "DD/MM/YYYY"), ["loops infinitos", "jogar fifa"])
const Turing: FullTimeMission = new FullTimeMission("THE_BEST", moment("18/04/2020", "DD/MM/YYYY"), moment("13/11/2020", "DD/MM/YYYY"))
const Diego: Student = new Student("c3", "Diego", "diego@gmail.com", moment("28/06/1990", "DD/MM/YYYY"), ["jogar valorant", "viajar", "conhecer novas culturas"])
const Luiz: Student = new Student("d4", "Luiz", "luiz@gmail.com", moment("25/08/1992", "DD/MM/YYYY"), ["cantar um rap", "jogar cs"])
// Turing.setName("Turing")
// Turing.addTeacher(Mateus)
// Turing.addStudent(Vinicius)
// Turing.setCurrentModule(4)
// console.log(Turing)

const NightTuring: NightMission = new NightMission("ALMOST_THE_BEST", moment("18/04/2020", "DD/MM/YYYY"), moment("13/11/2020", "DD/MM/YYYY"))
NightTuring.setName("Turing-na-night")
// console.log(NightTuring)
