export const checkValidData = (name, email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])([^\s]){8,}$/.test(
    password
  );
  
  // Name validation only if name is provided (i.e. during Sign Up)
  if (name !== "" && name.trim().length === 0) {
    return "Please enter name";
  }

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPassword) return "Password is not valid";

  return null; //null means no errors
};
