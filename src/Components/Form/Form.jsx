import React, { useState, useEffect } from "react";

const Form = ({ purchase }) => {
  const [formState, setFormState] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  });

  const [disable, setDisable] = useState(true);

  const validateEmail = (mail) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const mail = validateEmail(formState.userEmail);
    if (
      formState.userName.length > 6 &&
      mail &&
      formState.userPhone.length === 10
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [formState]);

  const handleInputChange = (event) => {
    const value = event.target.value;

    setFormState({
      ...formState,
      [event.target.name]: value,
    });
  };

  return (
    <>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="title">Almost there...</div>
        <div className="subtitle">Let's finish your purchase!</div>
        <div className="input-container ic1">
          <label htmlFor="userName" className="labelInput">
            Name
          </label>
          <input
            type="text"
            className="input"
            name="userName"
            placeholder="Gonzalo Ramos"
            value={formState.userName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container ic2">
          <label htmlFor="userEmail" className="labelInput">
            Email
          </label>
          <input
            type="email"
            name="userEmail"
            className="input"
            placeholder="gonzalo.ariel13@gmail.com"
            value={formState.userEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container ic2">
          <label htmlFor="userPhone" className="labelInput">
            Phone number
          </label>
          <input
            type="number"
            name="userPhone"
            placeholder="1133642598"
            minLength="10"
            maxLength="10"
            className="input"
            value={formState.userPhone}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          className="submit"
          type="submit"
          disabled={disable}
          onClick={() => {
            purchase(
              formState.userName,
              formState.userEmail,
              formState.userPhone
            );
          }}
        >
          Finish purchase
        </button>
      </form>
    </>
  );
};

export default Form;
