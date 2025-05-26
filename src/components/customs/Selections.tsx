import React from 'react';

import { cn } from '@/lib/utils';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface SelectionsBaseProps {
  items: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
  triggerClassName?: string;
  value?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
}



export const SelectionsBase: React.FC<SelectionsBaseProps> = ({ items, triggerClassName, placeholder = "Select", className, value, disabled, onValueChange }) => {
	return (
		<Select onValueChange={onValueChange} disabled={disabled} value={value} >
			<SelectTrigger className={cn("w-[143px] !h-[45px] focus-visible:ring-0 focus-visible:ring-offset-0", triggerClassName)}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent className={cn("border-gray-50 bg-white hover:bg-white shadow-light",className)}>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value} className='!h-[45px] hover:!bg-gray-100 [data-state=checked]:!bg-gray-100'>
            {item.label}
          </SelectItem>
        ))}
			</SelectContent>
		</Select>
	);
};
