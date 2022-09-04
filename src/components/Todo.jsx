import React from 'react'

const Todo = ({todo, todo1, todo2, index, deleteTodo}) => {
    return (
        <>
            <div className="list">
                <h3>{todo} - {todo1}</h3><input type="number" min="1" max="100"></input><button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
            </div>
        </>
    )
}

export default Todo