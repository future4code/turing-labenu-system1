import { Teacher } from './Teacher'
import { TEACHER_SPECIALTY } from './Teacher'
import { Student } from './Student'
import moment from 'moment'
import { FullTimeMission } from './FullTimeMission'
import { NightMission } from './NightMission'
import { TaskManager } from './taskManager'

const Mateus: Teacher = new Teacher("a1", "Mateus", "mateus@gmail.com", [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT])
const Amanda: Teacher = new Teacher("e5", "Amanda", "amanda@gmail.com", [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT])

const Vinicius: Student = new Student("b2", "Vinicius", "vini@gmail.com", moment("23/10/2000", "DD/MM/YYYY"), ["loops infinitos", "jogar fifa"])
const Diego: Student = new Student("c3", "Diego", "diego@gmail.com", moment("28/06/1990", "DD/MM/YYYY"), ["jogar valorant", "viajar", "conhecer novas culturas"])
const Luiz: Student = new Student("d4", "Luiz", "luiz@gmail.com", moment("21/08/1996", "DD/MM/YYYY"), ["cantar um rap", "jogar cs"])

const Turing: FullTimeMission = new FullTimeMission("THE_BEST", moment("18/04/2020", "DD/MM/YYYY"), moment("13/11/2020", "DD/MM/YYYY"))
const Bouman: FullTimeMission = new FullTimeMission("f6", moment("20/02/2020", "DD/MM/YYYY"),moment("25/08/2020", "DD/MM/YYYY"),[Mateus, Amanda], [Vinicius], 5)
const NightTuring: NightMission = new NightMission("ALMOST_THE_BEST", moment("18/04/2020", "DD/MM/YYYY"), moment("13/11/2020", "DD/MM/YYYY"))

Turing.setName("Turing")
Bouman.setName("Bouman")
NightTuring.setName("Turing-na-night")

Turing.addTeacher(Mateus)
Turing.setCurrentModule(4)

Turing.addStudent(Luiz)
NightTuring.addStudent(Vinicius)
NightTuring.addStudent(Diego)

const taskManager: TaskManager = new TaskManager()

// taskManager.createStudent(Luiz)
// taskManager.createStudent(Vinicius)
// taskManager.createStudent(Diego)

// taskManager.createTeacher(Mateus)
// taskManager.createTeacher(Amanda)

// taskManager.createMission(Bouman)
// taskManager.createMission(Turing)
// taskManager.createMission(NightTuring)

// console.log(taskManager.getStudentAgeById("b2"))

taskManager.getStudents()




// NightTuring.getStudentAge("d3")
