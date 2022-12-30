import { ValidationError } from "@formspree/react";

const FormRow = ({
  name,
  labelText,
  type,
  placeholder,

  required,
  textarea,
  state,
  pattern,
}) => {
  if (textarea) {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
          {required && <span>*</span>}
        </label>
        <textarea
          className='form-textarea'
          name={name}
          id={name}
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
        {required && <span>*</span>}
      </label>
      <input
        type={type}
        className='form-input'
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
      />
      <ValidationError prefix={type} field={name} errors={state?.errors} />
    </div>
  );
};
export default FormRow;
