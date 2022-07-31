import React, { useState, useEffect } from 'react';
import './Todo.css';

function Item({index, task, completeItem, deleteItem }) {
    return (
        <div style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}>
            {task.item_name}
            <button  data-testid='delete-button' style={{ background: "red" }} onClick={() => deleteItem(index)}>x</button>
            <button onClick={() => completeItem(index)} data-testid='toggle-button'>Toggle Task</button>
        </div>
    );
}

function AddItem({ addItem }) {
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!text) return;
        addItem(text);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <center><input
                type="text"
                className="input"
                value={text}
                placeholder="Enter task"
                onChange={e => setText(e.target.value)}
                data-testid ="input-field" />
            <button id="button" type="submit"  data-testid='add-task-button'>Add Task</button></center>
        </form>
    );
}

function Todo() {
    const [itemsRemaining, setItemsRemaining] = useState(0);
    const [items,setItems] = useState([]);

    useEffect(() => { setItemsRemaining(items.filter(task => !task.isCompleted).length) });

    const addItem = item_name => {
        const newItems = [...items, { item_name, isCompleted: false }];
        setItems(newItems);
    };

    const completeItem = index => {
        const newItems = [...items];
        newItems[index].isCompleted =!newItems[index].isCompleted;
        setItems(newItems);
    };

    const deleteItem = index => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const resetList = () =>{
        setItems([]);
    };

    return (
        <><div><h1><center>TodoList</center></h1></div>
        <div className="todo-container">
            <div className="header">Remanining number of tasks {itemsRemaining}</div>
            <div>
                <AddItem addItem={addItem} />
            </div>
            <center>
            <div className="task">
                {items.map((items, index) => (
                    <Item
                        task={items}
                        index={index}
                        completeItem={completeItem}
                        deleteItem={deleteItem}
                    />
                ))}
                <button data-testid='reset-button' onClick={() => resetList()}>Reset List</button>
            </div>
            </center>
        </div></>
    );
}

export default Todo;