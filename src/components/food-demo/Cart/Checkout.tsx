import classes from './Checkout.module.css';
import React, {useRef, useState} from "react";
import Button from '../UI/Button';

const Checkout = () => {

    const inputIsEmpty = (value: any) => value.trim() === '';
    const plzIsValid = (value: any) =>
        value.trim().length === 5 && typeof (+value) === 'number'

    const [inputIsValid, setInputIsValid] = useState({
        name: true,
        address: true,
        plz: true,
        city: true
    })

    const nameInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const addressInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const plzInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const cityInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredPLZ = plzInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const nameInputIsValid = !inputIsEmpty(enteredName);
        const addressInputIsValid = !inputIsEmpty(enteredAddress);
        const plzInputIsValid = plzIsValid(enteredPLZ);
        const cityInputIsValid = !inputIsEmpty(enteredCity);

        setInputIsValid({
            name: nameInputIsValid,
            address: addressInputIsValid,
            plz: plzInputIsValid,
            city: cityInputIsValid
        })
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={`${classes.control} ${inputIsValid.name ? "" : classes.invalid}`}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef}/>
                {inputIsValid.name ? '' : <p className={classes.invalid}>* Name should not be empty.</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="plz">PLZ</label>
                <input type="text" id="plz" ref={plzInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef}/>
            </div>
            <div className={classes.actions}>
                <Button type="button" className={classes['button--alt']}>Cancel</Button>
                <Button type="submit">Confirm</Button>
            </div>
        </form>
    )
}

export default Checkout;
