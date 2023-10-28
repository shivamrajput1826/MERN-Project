import React, { forwardRef, ForwardedRef, InputHTMLAttributes } from "react";
interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputText = forwardRef(
  (
    {name, ...otherProps }: IInputTextProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <input id={name} name={name} ref={ref} {...otherProps} />
      </div>
    );
  }
);

export default InputText;
