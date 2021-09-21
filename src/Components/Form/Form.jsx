import React, { useState } from "react";

const Form = ({ purchase }) => {
  const [formState, setFormState] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  });

  const handleInputChange = (event) => {
    const value = event.target.value;

    setFormState({
      ...formState,
      [event.target.name]: value,
    });
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Gonzalo Ramos"
        name="userName"
        value={formState.userName}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="userEmail"
        placeholder="gonzalo.ariel13@gmail.com"
        value={formState.userEmail}
        onChange={handleInputChange}
      />
      <input
        type="tel"
        name="userPhone"
        placeholder="11-3364-2598"
        value={formState.userPhone}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        onClick={() => {
          purchase(
            formState.userName,
            formState.userEmail,
            formState.userPhone
          );
        }}
      >
        {" "}
        Purchase
      </button>
    </form>
  );
};

export default Form;
