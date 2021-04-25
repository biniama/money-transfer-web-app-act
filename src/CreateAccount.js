import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';

const CreateAccount = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pin, setPin] = useState("");
    const [confirmPin, setConfirmPin] = useState("");

    const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);

    useEffect(() => {

        //TODO validate if pin and confirmPin are the same

        if (isSubmitButtonClicked === true) {
            // make api call
            axios.post(
                // "https://money-transfer-api-act.herokuapp.com/api/account/create",
                "http://localhost:8080/api/account/create",
                {
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    "phoneNumber": phoneNumber,
                    "pin": pin
                }
            )
                .then((response) => alert("Account created with id " + response.data.id))
                .catch((error) => console.error(error));
        }

    }, [isSubmitButtonClicked, firstName, lastName, email, phoneNumber, pin]);


    return (
        <form>
            <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                autoFocus
                value={firstName}
                onChange={(event) => {
                    setFirstName(event.target.value)
                }}
            />

            <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(event) => {
                    setLastName(event.target.value)
                }}
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
            />

            <TextField
                id="phoneNumber"
                label="Phone number"
                variant="outlined"
                value={phoneNumber}
                onChange={(event) => {
                    setPhoneNumber(event.target.value)
                }}
            />

            <TextField
                id="pin"
                label="Pin"
                variant="outlined"
                value={pin}
                onChange={(event) => {
                    setPin(event.target.value)
                }}
            />

            <TextField
                id="confirmPin"
                label="Confirm Pin"
                variant="outlined"
                value={confirmPin}
                onChange={(event) => {
                    setConfirmPin(event.target.value)
                }}
            />

            <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}
                onClick={() => setIsSubmitButtonClicked(true)}
            >
                Save
      </Button>
        </form>
    );
}

export default CreateAccount;