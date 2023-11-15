import React, { forwardRef, ForwardedRef, InputHTMLAttributes } from "react";
interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
}

const InputText = forwardRef(
  (
    {name, className,...otherProps }: IInputTextProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
        <input id={name} name={name} ref={ref} {...otherProps} className={className}/>
    );
  }
);

export default InputText;
