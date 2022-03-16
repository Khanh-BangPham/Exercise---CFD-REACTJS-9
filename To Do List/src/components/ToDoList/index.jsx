import React, {useState} from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
export default function ToDoList({ toDoList, handleAddFunc, handleCompletedFunc }) {
  const [valueInput, setValueInput] = useState();

  let _handleAdd = (e) => {
    handleAddFunc(valueInput);
    setValueInput('');
  }
  let _handleCompleted = (e) => {
    handleCompletedFunc(e);
  }

  return (
    <div className={styles.ToDoList}>
        <div className="input-group">
          <input value={valueInput} onChange={e => setValueInput(e.target.value)} type='text' placeholder='Nhập việc cần làm'/>
          <button onClick={_handleAdd} disabled={!valueInput}>Thêm</button>
        </div>
        <h1 className="title">Dashboard</h1>
        <div className="card-list">
          <div className="card">
            <h2>Việc cần làm</h2>
            {
              toDoList.filter(e => !e.isDone).map(e => 
                <div key={e.id} className={classNames('card-item', {done: e.isDone})}>
                  <div className="name">{e.name}</div>
                  <button onClick={() => _handleCompleted(e)}>✓</button>
                </div>
              )
            }
          </div>
          <div className="card">
            <h2>Việc đã làm</h2>
            {
              toDoList.filter(e => e.isDone).map(e => 
                <div key={e.id} className={classNames('card-item', {done: e.isDone})}>
                  <div className="name">{e.name}</div>
                  <button>✓</button>
                </div>
              )
            }
          </div>
        </div>
    </div>
  )
}
