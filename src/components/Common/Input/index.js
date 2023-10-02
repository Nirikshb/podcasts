import React from 'react';

// InputComponent is a reusable component that represents an HTML input element.
// It accepts props like type, state, setState, placeholder, and required.
const InputComponent = ({ type, state, setState, placeholder, required }) => {
  // The component renders an <input> element with the following properties:
  // - type: Specifies the type of input (e.g., text, password, email).
  // - value: Binds the value of the input to the 'state' prop.
  // - onChange: Calls the 'setState' function when the input value changes.
  // - placeholder: Sets the placeholder text for the input.
  // - required: Specifies whether the input is required (true/false).

  return (
    <input
      type={type}
      value={state}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="custom-input"
    />
  );
};

export default InputComponent;
