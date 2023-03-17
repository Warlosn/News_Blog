import { Box, Typography } from "@mui/material";
import { FormikErrors } from "formik";
import { ErrorMessage } from "../../authorization/styled";
import { TagInput, TagSubmitBtn } from "./styled";

export type AddTagsFormProps = {
  value: string;
  errors: FormikErrors<any>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
};

export default function AddTagsForm({
  value,
  errors,
  handleSubmit,
  handleChange,
}: AddTagsFormProps) {
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TagInput
          type="text"
          value={value}
          name="value"
          onChange={handleChange}
        />
        <TagSubmitBtn type="submit" disabled={!!errors.value || value == ""}>
          ADD
        </TagSubmitBtn>
      </form>
      {errors.value && (
        <ErrorMessage style={{ marginTop: 2 }}>{errors.value}</ErrorMessage>
      )}
      {errors.add_tag && (
        <ErrorMessage style={{ marginTop: 2 }}>{errors.add_tag}</ErrorMessage>
      )}
    </Box>
  );
}
