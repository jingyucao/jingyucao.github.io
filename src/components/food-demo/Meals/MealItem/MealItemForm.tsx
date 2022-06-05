import MealItemInput from "./MealItemInput";
import Button from "../../../UI/Button";
import React, {useRef, useState} from "react";
import classes from './MealItemForm.module.css';

interface Props {
    id: string,
    onAddToCart: (amount: number) => void;
}

const MealItemForm = (props: Props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const submitHandler: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredAmount: string = amountInputRef.current.value;
        const enteredAmountNumber: number = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return
        }

        props.onAddToCart(enteredAmountNumber);

    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <MealItemInput
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    defaultValue: '1'
                }}/>
            <Button type='submit'>+ Add</Button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm;
