import StyledButton from "@components/Buttons/StyledButton";
import styled from "@emotion/styled";
import * as React from "react";
import { Path, UnpackNestedValue, useForm } from "react-hook-form";
import { CustomInput } from "./CustomInput";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const createCustomFormParts = <T,>(
  params: {
    label: Path<T>;
    required?: boolean;
    type: "string" | "number" | "yyyyMMdd";
    showError?: boolean;
    errorMessage?: string;
  }[],
  setState: (data: UnpackNestedValue<T>) => any
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>();

  const onSubmit = handleSubmit((data) => {
    setState(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Div>
        {params.map((p, index) => {
          return (
            <div key={index}>
              <CustomInput
                label={p.label}
                register={register}
                required={p.required}
              />
              {p.showError && (errors as any)[p.label] && p.errorMessage}
            </div>
          );
        })}
        <StyledButton type="submit" value="submit">
          {"submit"}
        </StyledButton>
      </Div>
    </form>
  );
};
