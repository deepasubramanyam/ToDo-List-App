import { render , screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Todo from './Todo.js';

describe('To complete/uncomplete an item from form using toggle button',()=>{
    test('rendering of toggle icon',()=>{
        render(<Todo />);

        const addTask = screen.getByTestId('add-task-button');

        const inputField = screen.getByTestId('input-field');

        userEvent.type(inputField,"To sleep");

        userEvent.click(addTask);
    
        const ToggleIcon = screen.getByTestId("toggle-button");

        expect(ToggleIcon).toBeInTheDocument();
    })

    test('To complete an item ',()=>{
        render(<Todo />);

        const addTask = screen.getByTestId('add-task-button');

        const inputField = screen.getByTestId('input-field');

        userEvent.type(inputField,"To sleep");

        userEvent.click(addTask);
    
        const ToggleIcon = screen.getByTestId("toggle-button");

        userEvent.click(ToggleIcon);

        const Item=screen.getByText("To sleep");

        expect(Item).toHaveStyle("textDecoration:line-through");
    })

    test('To uncomplete a compelted item',()=>{
        render(<Todo />);

        const addTask = screen.getByTestId('add-task-button');

        const inputField = screen.getByTestId('input-field');

        userEvent.type(inputField,"To sleep");

        userEvent.click(addTask);
    
        const ToggleIcon = screen.getByTestId("toggle-button");

        userEvent.click(ToggleIcon);//to complete item

        userEvent.click(ToggleIcon);// again press to uncomplete completed item

        const Item=screen.getByText("To sleep");

        expect(Item).toHaveStyle("textDecoration:none");
    })

    test('To count the pending tasks',()=>{
        render(<Todo />);

        const addTask = screen.getByTestId('add-task-button');

        const inputField = screen.getByTestId('input-field');

        userEvent.type(inputField,"To sleep");

        userEvent.click(addTask);
    
        const ToggleIcon = screen.getByTestId("toggle-button");

        userEvent.click(ToggleIcon);//to complete item

        userEvent.type(inputField,"To eat");

        userEvent.click(addTask);

        const count_pending = screen.getByText('Remanining number of tasks 1');

        expect(count_pending).toBeInTheDocument();
    })
})
    
