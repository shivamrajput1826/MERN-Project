import React, { FormEvent, useState, useRef,InputHTMLAttributes } from "react";
import InputText from "./InputText";

interface Field extends InputHTMLAttributes<HTMLInputElement>  {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  validator?: (value: string) => boolean;
  className?: string;
}

interface IForms {
  fields: Field[];
  onSubmit?: (formData: Record<string, string>) => void;
  className?: string;
  showSubmitButton?: boolean;
  children?: React.ReactNode

}

const Form = ({ fields, onSubmit,className,showSubmitButton,children,...otherProps }: IForms) => {
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
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit && onSubmit(formData);
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
    <>
    <form onSubmit={handleSubmit} className={className}>
      {fields.map((field) => {
        return (
          <React.Fragment key={field.name}>
            <InputText
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              ref={inputRefs}
              placeholder={field.label}
              autoComplete="off"
              className={field?.className}
              {...otherProps}
            />
            {errors[field.name] && <span style={{color:"#ff0000"}}>{errors[field.name]}</span>}
          </React.Fragment>
        );
      })}
      {children&&<>{children}</>}
      {showSubmitButton && <button type="submit">Submit</button>}
    </form>
    </>
  );
};

export default Form;
