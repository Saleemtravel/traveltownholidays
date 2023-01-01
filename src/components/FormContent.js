import FormRow from "./FormRow";

const FormContent = ({ state }) => {
  return (
    <>
      <FormRow
        name={"name"}
        type={"text"}
        placeholder={"Kindly enter your name"}
        required={true}
        state={state}
      />
      <FormRow
        name={"contactNumber"}
        type={"tel"}
        labelText={"contact number"}
        pattern='[\+()]*(?:\d[\s\-\.()xX]*){10,14}'
        placeholder={"1234567890"}
        required={true}
        state={state}
      />
      <FormRow name={"email"} type={"email"} placeholder={"xyz@gmail.com"} />
      <FormRow
        name={"destination"}
        type={"text"}
        placeholder={"ex:Kashmir, Kerala, Dubai"}
        required={true}
        state={state}
      />

      <FormRow
        name={"adults"}
        type={"text"}
        placeholder={"No. of people"}
        required={true}
        state={state}
      />
      <FormRow
        name={"children"}
        type={"text"}
        placeholder={"3 (Age 3,5, 7 yrs old)"}
        state={state}
      />

      <div className='col-2'>
        <FormRow
          name={"numberOfDays"}
          labelText={"Number of days"}
          type={"text"}
          placeholder={"ex: 4N 5D"}
          required={true}
          state={state}
        />
        <FormRow
          name={"fromDate"}
          labelText={"from date"}
          type={"date"}
          state={state}
        />
      </div>
      <FormRow
        name={"specialArrangements"}
        labelText={"Special Arrangements"}
        textarea={true}
        state={state}
        placeholder={"Tell us more about your requirments....."}
      />

      <button
        type='submit'
        className='btn btn-block'
        disabled={state?.submitting}
      >
        submit
      </button>
    </>
  );
};
export default FormContent;
