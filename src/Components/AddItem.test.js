import { render , screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Todo from './Todo.js';
describe('To add an item and submit using Add Task button',()=>{
    test('Adding item to the form',()=>{
        render(<Todo />)
    
        const inputField = screen.getByTestId('input-field');

        userEvent.type(inputField,"To sleep");  

        expect(inputField).toHaveValue("To sleep");
    })

    test('clicking Add Task button to add item below',()=>{
        render(<Todo/>)
    
        const addTask = screen.getByTestId('add-task-button');

        const inputField = screen.getByTestId('input-field');

        userEvent.type(inputField,"To sleep");

        userEvent.click(addTask);
            
        expect(addTask).toBeInTheDocument();
    })

    test('To check whether added item is present',()=>{
        render(<Todo/>)
    
        const addTask = screen.getByTestId('add-task-button');

        const inputField = screen.getByTestId('input-field');

        userEvent.type(inputField,"To sleep");

        userEvent.click(addTask);
            
        const Item=screen.getByText("To sleep");

        expect(Item).toBeInTheDocument();
    })
})
