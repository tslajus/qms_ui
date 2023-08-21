import styles from "./InputField.module.scss";

type InputFieldProps = {
  value: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  numbersOnly?: boolean;
  type?: "text" | "number" | "password" | "email";
  name?: string;
  className?: string;
};

function InputField({
  value,
  onChange,
  placeholder,
  maxLength,
  type = "text",
  name,
  numbersOnly,
  className,
}: InputFieldProps) {
  const combinedClassName = `${styles.field} ${className || ""}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (numbersOnly) {
      const numericValue = e.target.value.replace(/[^0-9]/g, "");
      onChange({ ...e, target: { ...e.target, value: numericValue } });
    } else {
      onChange(e);
    }

    if (maxLength && e.target.value.length > maxLength) {
      onChange({
        ...e,
        target: { ...e.target, value: e.target.value.slice(0, maxLength) },
      });
    }
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      name={name}
      className={combinedClassName}
    />
  );
}

export default InputField;
