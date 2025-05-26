// components/form/AdvancedForm.tsx
import React, {useCallback} from "react";
import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";

// Create Schema Validation
const createDynamicSchema = (fields: FormField[]) => {
  const schemaFields: Record<string, z.ZodType> = {};

  fields.forEach((field) => {
    let validator = z.string();

    if (field.required) validator = validator.min(1, "Trường này bắt buộc");
    if (field.type === "email")
      validator = z.string().email("Email không hợp lệ");
    if (field.type === "number") validator = z.coerce.string();

    schemaFields[field.name] = validator;
  });

  return z.object(schemaFields);
};

// Definition of Field type
interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "number" | "select" | "checkbox";
  required?: boolean;
  options?: {value: string; label: string}[];
}

interface AdvancedFormProps {
  fields: FormField[];
  onSubmit: (data: any) => void;
}

export const AdvancedForm: React.FC<AdvancedFormProps> = ({
  fields,
  onSubmit,
}) => {
  // Create Schema
  const schema = createDynamicSchema(fields);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(schema),
  });

  const renderField = useCallback(
    (field: FormField) => {
      switch (field.type) {
        case "text":
        case "email":
        case "number":
          return (
            <Controller
              key={field.name}
              name={field.name}
              control={control}
              render={({field: controllerField}) => (
                <div>
                  <label>{field.label}</label>
                  <input
                    type={field.type}
                    {...controllerField}
                    className="w-full p-2 border rounded"
                  />
                  {errors[field.name] && (
                    <p className="text-red-500">
                      {errors[field.name]?.message as string}
                    </p>
                  )}
                </div>
              )}
            />
          );

        case "select":
          return (
            <Controller
              key={field.name}
              name={field.name}
              control={control}
              render={({field: controllerField}) => (
                <div>
                  <label>{field.label}</label>
                  <select
                    {...controllerField}
                    className="w-full p-2 border rounded"
                  >
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors[field.name] && (
                    <p className="text-red-500">
                      {errors[field.name]?.message as string}
                    </p>
                  )}
                </div>
              )}
            />
          );

        default:
          return null;
      }
    },
    [control, errors]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map(renderField)}
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};
