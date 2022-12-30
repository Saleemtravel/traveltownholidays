import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import FormContent from "./FormContent";
import { useAppContext } from "../context/appContext";
import { useForm } from "@formspree/react";
import { useRef } from "react";

const ModalForm = () => {
  const { closeModalForm } = useAppContext();
  const [state, handleSubmit] = useForm("xeqdyyay");
  const form = useRef(null);

  if (state.succeeded) {
    form.current.reset();
    closeModalForm();
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} ref={form}>
        <div className='formtitle'>
          <h4>Kindly submit the details</h4>
          <button
            onClick={closeModalForm}
            className={"btn btn-close"}
            type='button'
            aria-label='Close'
          >
            <FaTimes aria-hidden='true' />
          </button>
        </div>
        <FormContent />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow: auto;
  z-index: 200;
  transition: var(--transition);
  form {
    width: 90vw;
    max-width: var(--fixed-width);

    background: var(--white);
    padding: 1rem 1.5rem;
    margin: 0.25rem auto;
    border-radius: var(--borderRadius);
  }
  .formtitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .btn-close {
    z-index: 101;
  }
  .col-2 {
    display: grid;
    gap: 0.25rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }
  .formtitle h3 {
    margin-bottom: 0;
  }
`;
export default ModalForm;
