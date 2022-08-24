import { Trash, Check } from "phosphor-react";

import styles from "./Task.module.css";

interface TaskProps {
  description: string;
  checked: boolean;
  onDeleteTask: (description: string) => void;
  onChangeCheckTask: (description: string, isChecked: boolean) => void;
}

export function Task({ description, checked, onDeleteTask, onChangeCheckTask }: TaskProps) {

  function handleDeleteTask() {    
    onDeleteTask(description);
    if(checked)
      onChangeCheckTask(description, false);
  }

  function handleCheckedTask() {
    onChangeCheckTask(description, !checked);
  }
  
  return (
    <div className={styles.content}>
      <div className={styles.taskDescription}>
        <button className={checked ? styles.btnChecked : styles.btnUnChecked} onClick={handleCheckedTask}>
          { checked &&
            <Check size={10} weight="bold"/>
          }
        </button>
        <p className={checked ? styles.taskChecked : styles.taskUnchecked}>
          {description}
        </p>
      </div>
      
      <button className={styles.btnTrash} onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
      
    </div>
  );
}
