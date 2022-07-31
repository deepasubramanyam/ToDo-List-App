import { render , screen } from "@testing-library/react"
import Todo from './Todo.js';

describe('Rendering of basic components of Todo List',()=>{
    test('Rendering of title above form',()=>{
        render(<Todo/>);

        const title = screen.getByText('TodoList');

        expect(title).toBeInTheDocument();
    })

    test('Rendering of an input field',()=>{
        render(<Todo/>);

        const inputField = screen.getByTestId('input-field');

        expect(inputField).toBeInTheDocument();
    })

    test('Rendering of a Add Task button',()=>{
        render(<Todo/>);

        const addTask = screen.getByTestId('add-task-button')

        expect(addTask).toBeInTheDocument();
    })

    test('Rendering of a Reset List button',()=>{
        render(<Todo/>);

        const resetButton = screen.getByTestId('reset-button')

        expect(resetButton).toBeInTheDocument();
    })
})


    