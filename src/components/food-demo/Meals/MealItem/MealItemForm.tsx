import ItemInput from "./ItemInput";
import Button from "../../UI/Button";
import React, {useRef, useState} from "react";

const MealItemForm = (props: any) => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const submitHandler: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredAmount: String = amountInputRef.current.value;
        const enteredAmountNumber: Number = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return
        }

        console.log(enteredAmountNumber)
    }

    return (
        <form style={{textAlign: "right"}} onSubmit={submitHandler}>
            <ItemInput
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
