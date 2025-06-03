"use client";

import React, { useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

export type FieldType =
	| "text"
	| "email"
	| "password"
	| "number"
	| "textarea"
	| "checkbox"
	| "select";
export type UIType = "base" | "shadcn";

export type FieldOption = string | {label: string; value: string};

export type FieldConfig = {
	name: string;
	label?: string;
	type: FieldType;
	uiType?: UIType;
	required?: boolean;
	placeholder?: string;
	disabled?: boolean;
	options?: FieldOption[];
	className?: string;
	style?: React.CSSProperties;
	labelClassName?: string;
	wrapperClassName?: string;
	containerClassName?: string;
	inputProps?: React.InputHTMLAttributes<any>;
  showStar?: boolean
};

type Props = {
	fields: FieldConfig[];
	onSubmit: (data: Record<string, any>) => void;
	initialValues?: Record<string, any>;
	submitText?: string;
	button?: React.ReactNode;
  buttonClassName?: string
  className?: string
};

const Form: React.FC<Props> = ({
	fields,
	onSubmit,
	initialValues = {},
	submitText = "Submit",
	button,
  buttonClassName,
  className
}) => {
	const [formData, setFormData] = useState<Record<string, any>>(initialValues);

	const handleChange = (name: string, value: any) => {
		setFormData((prev) => ({...prev, [name]: value}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(formData);
	};

	const renderField = (field: FieldConfig) => {
		const {
			name,
			label,
			type,
			uiType = "base",
			required,
			placeholder,
			disabled,
			options,
			className,
			style,
			labelClassName,
			wrapperClassName,
      containerClassName,
			inputProps,
      showStar
		} = field;

		const value = formData[name] ?? (type === "checkbox" ? false : "");

		const baseInput = () => {
			switch (type) {
				case "textarea":
					return (
						<div className={wrapperClassName}>
							{label && <label className={labelClassName}>{label}{showStar && <span>*</span>}</label>}
							<textarea
								id={name}
								value={value}
								onChange={(e) => handleChange(name, e.target.value)}
								placeholder={placeholder}
								required={required}
								disabled={disabled}
								className={`border p-2 rounded ${className || ""}`}
								style={style}
								{...inputProps}
							/>
						</div>
					);
				case "select":
					return (
						<div className={wrapperClassName}>
							{label && <label className={labelClassName}>{label}</label>}
							<select
								id={name}
								value={value}
								onChange={(e) => handleChange(name, e.target.value)}
								required={required}
								disabled={disabled}
								className={`border p-2 rounded ${className || ""}`}
								style={style}
								{...inputProps}
							>
								<option value="">Select...</option>
								{options?.map((opt, i) => {
									const val = typeof opt === "string" ? opt : opt.value;
									const lbl = typeof opt === "string" ? opt : opt.label;
									return (
										<option key={i} value={val}>
											{lbl}
										</option>
									);
								})}
							</select>
						</div>
					);
				case "checkbox":
					return (
						<label className={cn('inline-flex items-center gap-2', wrapperClassName)}>
							<input
								type="checkbox"
								checked={value}
								onChange={(e) => handleChange(name, e.target.checked)}
								disabled={disabled}
								className={className}
								style={style}
								{...inputProps}
							/>
							{label}{showStar && <span>*</span>}
						</label>
					);
				default:
					return (
						<div className={wrapperClassName}>
							{label && <label className={labelClassName}>{label}{showStar && <span>*</span>}</label>}
							<input
								id={name}
								type={type}
								value={value}
								onChange={(e) => handleChange(name, e.target.value)}
								placeholder={placeholder}
								required={required}
								disabled={disabled}
								className={`border p-2 rounded ${className || ""}`}
								style={style}
								{...inputProps}
							/>
						</div>
					);
			}
		};

		const shadcnInput = () => {
			switch (type) {
				case "textarea":
					return (
						<div className={cn("grid gap-1", wrapperClassName)}>
							{label && <Label htmlFor={name}>{label}{showStar && <span>*</span>}</Label>}
							<Textarea
								id={name}
								value={value}
								onChange={(e) => handleChange(name, e.target.value)}
								placeholder={placeholder}
								required={required}
								disabled={disabled}
								className={className}
								{...inputProps}
							/>
						</div>
					);
				case "select":
					return (
						<div className={cn("grid gap-1", wrapperClassName)}>
							{label && <Label htmlFor={name}>{label}{showStar && <span>*</span>}</Label>}
							<Select
								value={value}
								onValueChange={(val) => handleChange(name, val)}
								disabled={disabled}
							>
								<SelectTrigger className={className}>
									<SelectValue placeholder={placeholder || "Select..."} />
								</SelectTrigger>
								<SelectContent>
									{options?.map((opt, i) => {
										const val = typeof opt === "string" ? opt : opt.value;
										const lbl = typeof opt === "string" ? opt : opt.label;
										return (
											<SelectItem key={i} value={val}>
												{lbl}
											</SelectItem>
										);
									})}
								</SelectContent>
							</Select>
						</div>
					);
				case "checkbox":
					return (
						<div className={cn("flex items-center space-x-2", wrapperClassName)}>
							<Checkbox
								id={name}
								checked={value}
								onCheckedChange={(val) => handleChange(name, val)}
							/>
							{label && <Label htmlFor={name}>{label}{showStar && <span>*</span>}</Label>}
						</div>
					);
				default:
					return (
						<div className={cn("grid gap-1", wrapperClassName)}>
							{label && <Label htmlFor={name}>{label}{showStar && <span>*</span>}</Label>}
							<Input
								id={name}
								type={type}
								value={value}
								onChange={(e) => handleChange(name, e.target.value)}
								placeholder={placeholder}
								required={required}
								disabled={disabled}
								className={className}
								{...inputProps}
							/>
						</div>
					);
			}
		};

		return (
			<div key={name} className={cn("mb-4 ", containerClassName)}>
				{uiType === "shadcn" ? shadcnInput() : baseInput()}
			</div>
		);
	};

	return (
		<form onSubmit={handleSubmit} className={className}>
			{fields.map(renderField)}
			{button && button}
			{!button && (
				<button type="submit" className={cn("mt-4 px-4 py-2 rounded bg-black text-white", buttonClassName)}>
					{submitText}
				</button>
			)}
		</form>
	);
};

export default Form;
