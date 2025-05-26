"use client";

import * as React from 'react';

import {
  Check,
  ChevronsUpDown,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type Option = {
	label: string;
	value: string;
};

interface ComboBoxBaseProps {
	options: Option[];
	placeholder?: string;
	onSelect: (value: Option) => void;
	selectedValue?: string;
	className?: string;
	triggerClassName?: string;
	disabled?: boolean;
	classNameInput?: string;
	classNameList?: string;
	classNameItem?: string;
}

export function ComboBoxBase({
	options,
	placeholder = "Chọn mục...",
	onSelect,
	selectedValue,
	className,
	triggerClassName,
	disabled = false,
	classNameInput,
	classNameList,
	classNameItem,
}: ComboBoxBaseProps) {
	const [open, setOpen] = React.useState(false);

	const selectedOption = options.find((opt) => opt.value === selectedValue);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					disabled={disabled}
					aria-expanded={open}
					className={cn("w-[250px] justify-between hover:bg-transparent cursor-pointer font-normal", triggerClassName)}
				>
					{selectedOption ? selectedOption.label : placeholder}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className={cn("w-[250px] p-0 bg-white", className)}>
				<Command className='bg-white'>
					<CommandInput placeholder="Tìm kiếm..." className={cn("",classNameInput)} />
					<CommandEmpty>Không tìm thấy mục nào.</CommandEmpty>
					<CommandGroup className={cn("border-gray-50 bg-white hover:bg-white shadow-light max-h-[500px] overflow-y-auto",classNameList)}>
						{options.map((option) => (
							<CommandItem
								className={cn("hover:bg-gray-100",classNameItem)}
								key={option.value}
								value={option.label}
								onSelect={() => {
									onSelect(option);
									setOpen(false);
								}}
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4 hover:bg-gray-100",
										selectedValue === option.value ? "opacity-100" : "opacity-0"
									)}
								/>
								{option.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
