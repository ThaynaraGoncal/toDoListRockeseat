import { PlusCircle } from 'phosphor-react';

import styles from './ButtonAdd.module.css';

export function ButtonAdd({ handleAddNewTask }: any) {
  return (
    <button className={styles.btnAdd} type="button" onClick={handleAddNewTask} >
      <p>Criar</p>
      <PlusCircle size={24} weight="bold"/>
    </button>
  );
}