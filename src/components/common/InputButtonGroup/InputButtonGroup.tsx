import { InputField, Button } from "@/components";

import styles from "./InputButtonGroup.module.scss";

type InputButtonGroupProps = {
  fieldValue: string;
  fieldOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fieldPlaceholder?: string;
  maxLength?: number;
  numberOnly?: boolean;
  name?: string;
  buttonLabel: string;
  buttonOnClick: () => void;
  disabled?: boolean;
  className?: string;
  buttonClass?: string;
};

function InputButtonGroup({
  fieldValue,
  fieldOnChange,
  fieldPlaceholder,
  maxLength,
  numberOnly = true,
  name,
  buttonLabel,
  buttonOnClick,
  disabled = false,
  className,
  buttonClass,
}: InputButtonGroupProps) {
  const combinedClassName = `${styles.group} ${className || ""}`;

  return (
    <div className={combinedClassName}>
      <InputField
        className={styles["group__input"]}
        value={fieldValue}
        onChange={fieldOnChange}
        placeholder={fieldPlaceholder}
        name={name}
        maxLength={maxLength}
        numbersOnly={numberOnly}
      />
      <Button
        className={buttonClass}
        label={buttonLabel}
        onClick={buttonOnClick}
        disabled={disabled}
      />
    </div>
  );
}

export default InputButtonGroup;
