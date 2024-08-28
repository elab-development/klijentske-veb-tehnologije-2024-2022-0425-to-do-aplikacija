import { ChangeEvent, useState, KeyboardEvent } from 'react';
import { Task, User} from '../../types';
import style from "../../modules/ToDoList.module.css"; 


interface ToDoListProp {
    name: String;
    user: User | null;
    setUser: (user: User | null) => void;
}

function ToDoList(prop: ToDoListProp) {
    const [tasks, setTasks] = useState<Task[]>(prop.user?prop.name==="DAILY"?prop.user.daily:prop.user.travel:[]);
    const [newTask, setNewTask] = useState<Task>(new Task(""));
    const [showUnfinishedOnly, setShowUnfinishedOnly] = useState<boolean>(false);

      
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(c => new Task(c.description = event.target.value));
    }
    function addTask() {
        if (newTask.description.trim() === "" || tasks.length>=10){ if(tasks.length>=10) alert("Upgradujte plan");      return;}
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setNewTask(new Task(""));
        if(prop.name === "DAILY" && prop.user){
            prop.user.daily=updatedTasks;
            prop.setUser(prop.user);
            
        }
        else if(prop.user){
            prop.user.travel=updatedTasks;
            prop.setUser(prop.user);
        }
        else{
            console.log(prop.user)
        }

    }
      

    function deleteTask(index: number) {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

    function toggleShowFinished(index: number) {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index] = new Task(updatedTasks[index].description);
            updatedTasks[index].setFinished(!prevTasks[index].isFinished);
            if(prop.name === "DAILY" && prop.user){
                prop.user.daily=updatedTasks;
                prop.setUser(prop.user);
                
            }
            else if(prop.user){
                prop.user.travel=updatedTasks;
                prop.setUser(prop.user);
            }
            else{
                console.log(prop.user)
            }
            return updatedTasks;
        });
    }

    function toggleFilter() {
        setShowUnfinishedOnly(prev => !prev);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            addTask();
        }
    }
    const filteredTasks = showUnfinishedOnly
        ? tasks.filter(task => !task.isFinished)
        : tasks;

    return (
        <div className={style.toDoList}>
            <h1>MOJI ZADACI: <span>{prop.name}</span></h1>

            <button onClick={toggleFilter}>
                {showUnfinishedOnly ? 'Odkrij zavrsene' : 'Sakrij zavrsene'}
            </button>

            <ul>
                {filteredTasks.map((task, i) => (
                    <li
                        key={i}
                        className={task.isFinished ? style.finishedTask : style.unfinishedTask}
                        onClick={() => toggleShowFinished(i)}
                    >
                        <span>{task.description}</span>
                        <button
                            className={style.deleteButton}
                            onClick={(e) => { e.stopPropagation(); deleteTask(i); }}
                        >
                        </button>
                    </li>
                ))}
            </ul>

            <div>
                <input
                    type="text"
                    placeholder='Unesite podsetnik...'
                    value={newTask.description}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button className={style.addButton} onClick={addTask}>Dodaj zadatak</button>
            </div>
        </div>
    );
}

export default ToDoList;
