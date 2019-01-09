import React from "react";
import "./Button.css";

const SignInButton = props => (
    <span className="signInBtn"{...props}>
        Sign In
    </span>
);
const SignUpButton = props => (
    <span className="signUpBtn"{...props}>
        Sign Up
    </span>
);
const SignOutButton = props => (
    <span className="signOutBtn"{...props}>
        Sign Out
    </span>
);
const YourHobbiesButton = props => (
    <span className="hobbyBtn"{...props}>
        See Your Hobbies
    </span>
);
const SubmitButton = props => (
    <span className="submitBtn"{...props}>
        Submit
    </span>
);

export default SignInButton;
export default SignUpButton;
export default SignOutButton;
export default YourHobbiesButton;
export default SubmitButton;