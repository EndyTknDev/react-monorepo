export const isEmailValid = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

export default isEmailValid;
