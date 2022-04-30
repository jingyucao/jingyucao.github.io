import classes from './Checkout.module.css';
import React, {MouseEventHandler, useRef, useState} from "react";
import Button from '../UI/Button';

interface Prop {
    onConfirm: (userData: Object) => void
    onCancel: () => void
}

const Checkout = (props: Prop) => {

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

        const formIsValid = nameInputIsValid && addressInputIsValid && plzInputIsValid && cityInputIsValid;

        if (!formIsValid) {
            return
        }

        props.onConfirm({
            name: enteredName,
            address: enteredAddress,
            plz: enteredPLZ,
            city: enteredCity
        })
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.row}>
                <div className={`${classes.control} ${inputIsValid.name ? "" : classes.invalid}`}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id={classes.name} ref={nameInputRef}/>
                    {inputIsValid.name ? '' : <p className={classes.invalid}>* Name should not be empty.</p>}
                </div>
                <div className={`${classes.control} ${inputIsValid.city ? "" : classes.invalid}`}>
                    <label htmlFor="city">City</label>
                    <input type="text" id={classes.city} ref={cityInputRef}/>
                    {inputIsValid.city ? '' : <p className={classes.invalid}>* City should not be empty.</p>}
                </div>
            </div>
            <div className={classes.row}>
                <div className={`${classes.control} ${inputIsValid.plz ? "" : classes.invalid}`}>
                    <label htmlFor="plz">PLZ</label>
                    <input type="text" id={classes.plz} ref={plzInputRef}/>
                    {inputIsValid.plz ? '' : <p className={classes.invalid}>* PLZ should be 5 numbers.</p>}
                </div>
                <div className={`${classes.control} ${inputIsValid.address ? "" : classes.invalid}`}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id={classes.address} ref={addressInputRef}/>
                    {inputIsValid.address ? '' : <p className={classes.invalid}>* Address should not be empty.</p>}
                </div>
            </div>


            <div className={classes.actions}>
                <Button type="button" className={classes['button--alt']} onClick={props.onCancel}>Cancel</Button>
                <Button type="submit">Confirm</Button>
            </div>
        </form>
    )
}

export default Checkout;
