import React from "react";

import AnimatedInput from "../common/inputs/AnimatedInput"
import CustomCheckbox from "../common/inputs/CustomCheckbox";

const RegisterForm = ({ formSubmitHandler, inputChangeHandler }) => {
    return (
        <form className="m-loginForm" onSubmit={formSubmitHandler}>
            <h1 className="a-header">Register Page</h1>
            <div className="m-loginForm__group">
                <AnimatedInput
                    placeholder="First Name"
                    animatedBorder
                    inputType="text"
                    inputName="firstName"
                    changeHandler={inputChangeHandler}
                />
            </div>

            <div className="m-loginForm__group">
                <AnimatedInput
                    placeholder="Last Name"
                    animatedBorder
                    inputType="text"
                    inputName="lastName"
                    changeHandler={inputChangeHandler}
                    />
            </div>

            <div className="m-loginForm__group">
                <AnimatedInput
                    placeholder="Username"
                    animatedBorder
                    inputType="text"
                    inputName="username"
                    required
                    changeHandler={inputChangeHandler}
                    />
            </div>

            <div className="m-loginForm__group">
                <AnimatedInput
                    placeholder="Password"
                    animatedBorder
                    inputType="password"
                    inputName="password"
                    required
                    changeHandler={inputChangeHandler}
                    />
            </div>

            <button className="a-submitButton" type="submit">
                Register
            </button>
        </form>
    );
};

export default RegisterForm;