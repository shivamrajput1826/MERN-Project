import React, { FormEvent, useState, useRef } from "react";
import InputText from "./InputText";
import styled from "styled-components";

interface Field {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  validator?: (value: string) => boolean;
}

interface IForms {
  fields: Field[];
  onSubmit: (formData: Record<string, string>) => void;
}

const StyledFormContainer=styled.div`
margin:12px;
`

const StyledContainer=styled.div`
margin-bottom:12px;
`

const Form = ({ fields, onSubmit,...otherProps }: IForms) => {
  const initialValues: Record<string, string> = {};
  fields.forEach((field) => {
    initialValues[field.name] = field.defaultValue || "";
  });

  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputRefs = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("formData:",formData)
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateFields = (): Record<string, string> => {
    const validationErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        validationErrors[field.name] = "Field is required";
      } else if (field.validator && !field.validator(formData[field.name])) {
        validationErrors[field.name] = "Invalid input";
      }
    });
    return validationErrors;
  };

  return (
    <StyledFormContainer>
    <form onSubmit={handleSubmit}>
      {fields.map((field) => {
        return (
          <StyledContainer key={field.name}>
            <InputText
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              ref={inputRefs}
              placeholder={field.label}
              autoComplete="off"
              {...otherProps}
            />
            {errors[field.name] && <span style={{color:"#ff0000"}}>{errors[field.name]}</span>}
          </StyledContainer>
        );
      })}
      <button type="submit">Submit</button>
    </form>
    </StyledFormContainer>
  );
};

export default Form;
