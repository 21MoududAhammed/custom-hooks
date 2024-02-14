import useFromInput from "../hooks/useFormInput";

export default function Form() {
  const firstNameProps = useFromInput("Mary");
  const lastNameProps = useFromInput("Poppins");

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <br /> <br />
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
