import React, {useState} from "react";

import "./NailConfigurator.css";

const NailConfigurator = (props) => {
    const availableColors = ['#fff', '#f00', '#0f0', '#00f', '#000'];
    const [enteredColor, setColor] = useState("");

    const colorChengeHandler = (event) => {
        setColor(event.target.value);
        props.changeColorHandler(event.target.value, props.nail);
    };

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //
    //     const expenseData = {
    //         title: enteredTitle,
    //         amount: +enteredAmount,
    //         date: new Date(enteredDate),
    //     };
    //
    //     props.onSaveExpenseData(expenseData);
    //     setEnteredTitle("");
    //     setEnteredAmount("");
    //     setEnteredDate("");
    // };

    return (
        <form /*onSubmit={submitHandler}*/>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Color</label>
                    <select
                        value={enteredColor}
                        onChange={colorChengeHandler}>
                        {availableColors.map(color => (
                            <option
                                key={color}
                                value={color}
                                name={color}>{color}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default NailConfigurator;
