import FormInput from "@ui/formInput";

export default function Signup() {
  return (
    <div>
      <FormInput.EmailInput
        error={{
          isError: true,
          message: "",
          isDuplicate: true,
        }}
        required
      />
    </div>
  );
}
