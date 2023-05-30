import React from "react";
import { Form } from 'react-bootstrap';
import { TargetType } from "../../Enums/Enums";


const IfFormOption = ({ handleOptionChange,option1,option2,selectedOption }) => {
  return (
    <div>
      <Form.Check
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
        label={option1.label}
        value={option1.value}
        checked={selectedOption == option1.value}
        onChange={handleOptionChange}
      />
      <Form.Check
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
        label={option2.label}
        value={option2.value}
        checked={selectedOption == option2.value}
        onChange={handleOptionChange}
      />
    </div>
  );
};

export default IfFormOption;

