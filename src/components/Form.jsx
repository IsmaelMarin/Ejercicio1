import React,{useState} from "react"
import Todo from "./Todo"

const Form = () => {
    const[todoL, setTodoL] = useState([
        {id:1, nombre:'manzana',precio:0.50},
        {id:2, nombre:'pera',precio:0.40},
        {id:3, nombre:'uva',precio:0.25},
        {id:4, nombre:'elote',precio:0.85},
        {id:5, nombre:'tomate',precio:0.80},
        {id:6, nombre:'aguacate',precio:1.05},
        {id:7, nombre:'rabano',precio:0.60},
        {id:8, nombre:'pepino',precio:0.90},
        {id:9, nombre:'cebolla',precio:0.40},
        {id:10, nombre:'chile verde',precio:0.75},
    ])
    const[todo, setTodo] = useState({
        id:'',
        nombre:'',
        precio:''
    })
    const[todos, setTodos] = useState([
        
    ])
    
    const handleChange = e => {
        console.log(e.target.value)
        setTodo({...todo,[e.target.name]: e.target.value})
    }
    const handleClick = e => {
        setTodos([...todos, todo]);
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }

    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Agregar producto</label><br />
            <select id="opciones" onChange={handleChange}>
            {
                todoL.map((value, index) => (
                    <option value={index}>{value.nombre} - {value.precio}</option>
                ))
            }
            </select>
            <button onClick={handleClick}>agregar</button>
        </form>
            {        
                todoL.map((value, index) => (
                    <Todo todo={value.nombre} todo1={value.precio} todo2={value.id} key={index} index={index} deleteTodo={deleteTodo}/>
                ))
                
            }
        </>
    )
}

export default Form