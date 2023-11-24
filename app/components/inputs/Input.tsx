"use client"
import clsx from "clsx"
import {
  FieldValues,
  FieldErrors,
  UseFormRegister
} from "react-hook-form"

interface InputProps {
  label: string,
  id: string,
  type?: string,
  required?: boolean,
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors,
  disabled?: boolean
} 

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled
}) => {
  return ( 
    <div>
      <label
        className="
          block
          font-medium
          text-sm
          leading-6
          text-gray-900
        " 
        htmlFor={id}
      >
        {label}
      </label>
      <div className="mt-2">
        <input 
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(`
            form-input
            block
            w-full
            rounded-md
            ring-1
            ring-insent
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-insent
            focus:ring-sky-600
            sm:text-sm
            sm:leading-6
          `,
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default" 
          )}
        />
      </div>
    </div>
  );
}
 
export default Input;