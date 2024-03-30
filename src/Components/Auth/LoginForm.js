import React from "react";

import AnimatedInput from "../common/inputs/AnimatedInput";
import CustomCheckbox from "../common/inputs/CustomCheckbox"

const LoginForm = ({ formSubmitHandler, inputChangeHandler }) => {
    return (
        <form className="m-loginForm" onSubmit={formSubmitHandler}>
            <h1 className="a-header">Login</h1>
            <div className="m-LoginForm__group">
                <AnimatedInput
                placeholder="Username"
                animatedBorder
                inputType="text"
                inputName="username"
                required
                changeHandler={inputChangeHandler}
                />
            </div>

            <div className="m-LoginForm__group">
            <AnimatedInput
                placeholder="Password"
                animatedBorder
                inputType="password"
                inputName="password"
                required
                changeHandler={inputChangeHandler}
                />
            </div>

            <div className="m-loginForm__group -mg-lg">
                <div className="m-loginForm__rememberWrapper">
                    { <CustomCheckbox
                        name="remember me"
                        id="remember_me"
                        labelText="Remember Me"
                        checkbox="✔︎"
                    ></CustomCheckbox>}

                    { <a className="a-linkButton" href="#">
                        I forgot password</a>}
                </div>
            </div>

            <button type="submit" className="a-submitButton">
                Login
            </button>
        </form>
    );
};

export default LoginForm;