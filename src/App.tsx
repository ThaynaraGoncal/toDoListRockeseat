import { Header } from "./components/Header";
import { PlusCircle } from 'phosphor-react';
import clipboard from './assets/clipboard.svg';
import styles from "./App.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import { Task } from "./components/Task";

import "./global.css";

interface TaskType {
  description: string;
  checked: boolean;
}

export function App() {
  const [newTextValue, setNewTextValue] = useState('');
  const [tasks, setTasks] = useState([
    { description: 'Lavar Vasilhas', checked: false },
    { description: 'Lavar Roupas', checked: false },
    { description: 'Passear com os dogs', checked: false }
  ]);
  const [countTasksCreated, setTasksCreated] = useState(tasks.length);
  const [countTasksChecked, setTasksChecked] = useState(0);

  useEffect(() => {
    setTasksCreated(tasks.length);
  }, [tasks])

  function handleAddNewTask() {
    let newTask = { description: newTextValue, checked: false };
    
    setTasks([...tasks, newTask]);

    setNewTextValue('');
  }

  function handleDeleteTask(description: string) {
    let tasksWithDeleteOne = tasks.filter(task => task.description !== description );
    setTasks(tasksWithDeleteOne);
  }

  function handleChangeNewText(event: ChangeEvent<HTMLInputElement>) {
    setNewTextValue(event.target.value);
  }

  function handleTaskChecked(descriptionTask: string, isChecked: boolean) {

    tasks.map((task: any) => {
      if(task.description === descriptionTask) {
        task.checked = isChecked;
      }
    });

    let countTasksIsChecked = 0;

    if(isChecked) {
      countTasksIsChecked = countTasksChecked +1;
    } else {
      countTasksIsChecked = countTasksChecked -1;
    }

    setTasksChecked(countTasksIsChecked);
  }

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <div className={styles.contentAddTask}>
          <input 
            type="text" 
            placeholder="Adicione uma nova tarefa"
            value={newTextValue}
            onChange={handleChangeNewText}
          />
          <button className={styles.btnAdd} onClick={handleAddNewTask} >
            <p>Criar</p>
            <PlusCircle size={24} weight="bold"/>
          </button>
        </div>

        <div className={styles.contentListTasks}>
          <div className={styles.headerList}>
            <p>Tarefas criadas <button>{countTasksCreated}</button></p>
            <p>Concluídas <button>{countTasksChecked}</button></p>
          </div>

          {tasks.length > 0 ?
          <div className={styles.tasks}>
            {tasks.map((task: TaskType) => {
              return (
                <Task
                  key={task.description}
                  description={task.description}
                  checked={task.checked}
                  onDeleteTask={handleDeleteTask}
                  onChangeCheckTask={handleTaskChecked}
                />
              )
            })}
          </div> :
          
          <div className={styles.tasksEmpty}>
            <img src={clipboard} alt="Empty" />

            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div> 
          }
        </div>
      </div>
    </div>
  );
}
