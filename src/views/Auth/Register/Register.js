import React, { useState } from "react";

import { connect } from "react-redux";

import { register } from "../../../store/users/actions";

import RegisterForm from "./../../../Components/Auth/RegisterForm";

const Register = ({ authRegister, history }) => {
    const initialInput = {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirm: false,
    };

    const [input, setInput] = useState(initialInput);

    const inputChangeHandler = (e) => {
        let inputName = e.target.name;
        let value = e.target.value;

        setInput((prevInput) => {
            return {
                ...prevInput,
                [inputName]: value,
            };
        });
    };

    const confirmChangeHandler = (e) => {
        let checked = e.target.checked;
        let name = e.target.name;

        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: checked,
            };
        });
    };
}