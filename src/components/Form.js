import FormContent from "./FormContent";
import { useForm } from "@formspree/react";
import { useRef } from "react";

const Form = () => {
  const [state, handleSubmit] = useForm("xeqdyyay");
  const form = useRef(null);

  if (state.succeeded) {
    form.current.reset();
  }

  return (
    <form onSubmit={handleSubmit} className='form' ref={form}>
      <h4>Kindly submit the details</h4>
      <FormContent state={state} />
    </form>
  );
};
export default Form;
