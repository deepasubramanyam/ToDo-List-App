import { render , screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Todo from './Todo.js';

describe('To delete an item from form using x button',()=>{
    test('rendering of delete icon',()=>{
        render(<Todo />);

        const addTask = screen.getByTestId('add-task-button');

        const inputField = screen.getByTestId('input-field');

        userEvent.type(inputField,"To sleep");

        userEvent.click(addTask);
    
        const deleteIcon = screen.getByTestId("delete-button");

        expect(deleteIcon).toBeInTheDocument();
    })

    test('Clicking x button to delete item from form',()=>{
        render(<Todo/>);
    
        const addTask = screen.getByTestId('add-task-button');

        const inputField = screen.getByTestId('input-field');

        userEvent.type(inputField,"To sleep");

        userEvent.click(addTask);
            
        const Item=screen.getByText("To sleep");

        const deleteIcon = screen.getByTestId("delete-button");

        userEvent.click(deleteIcon);

        expect(Item).not.toBeInTheDocument();
    })

    test('check whether deleting an item also removes from the pending tasks',()=>{
        render(<Todo />);

        const addTask = screen.getByTestId('add-task-button');

        const inputField = screen.getByTestId('input-field');

        userEvent.type(inputField,"To sleep");

        userEvent.click(addTask);

        const deleteIcon = screen.getByTestId("delete-button");

        userEvent.click(deleteIcon);

        const count_pending = screen.getByText('Remanining number of tasks 0');

        expect(count_pending).toBeInTheDocument();
    })
})