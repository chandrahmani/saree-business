import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";


const Style = ['btn--primary', 'btn--outline']

const Size = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSzie
}) => {
    const checkButtonStylev = Style.includes(buttonStyle)
        ? buttonStyle
        : Style[0];

    const checkButtonSize = Size.includes(buttonSzie ? buttonStyle : Size[0])

    return (
        <Link to="sign-up">
            <button
                className={`btn ${checkButtonStylev} ${checkButtonSize}`}
                onClick={onclick}
                type={type}>
                {children}
            </button>
        </Link>
    )
}
