export const validateEmail = (email) => {
    const isEmailValid = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
    return isEmailValid ? null : "Email ID is not valid";
}

export const validatePassword = (password) => {
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    return isPasswordValid ? null : "Password is not valid";
}

export const validateName = (name) => {
    const isNameValid = /^[A-Z][a-z]+(\s[A-Z][a-z]?){0,}/.test(name);
    return isNameValid ? null : "Name is not valid";
}