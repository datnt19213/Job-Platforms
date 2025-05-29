import { ReactNode } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	description?: string;
	children: ReactNode;
	className?: string;
	titleClassName?: string;
	descriptionClassName?: string;
	contentClassName?: string;
	showHeader?: boolean;
	size?: "sm" | "md" | "lg" | "xl" | "full";
}

const Modal = ({
	isOpen,
	onClose,
	title,
	description,
	children,
	className,
	titleClassName,
	descriptionClassName,
	contentClassName,
	showHeader = true,
	size = "md",
}: ModalProps) => {
	const sizeClasses = {
		sm: "max-w-[300px]", 
		md: "max-w-[600px]",
		lg: "max-w-[900px]",
		xl: "max-w-[1200px]",
		full: "max-w-[100%]",
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className={cn("max-h-[85vh] w-[calc(100%-30px)] border-none !animate-in !slide-in-from-top transition-all !duration-500 !zoom-in-90 !fade-in-20", sizeClasses[size], className)}>
				{showHeader && (title || description) && (
					<DialogHeader>
						{title && <DialogTitle className={titleClassName}>{title}</DialogTitle>}
						{description && <DialogDescription className={descriptionClassName}>{description}</DialogDescription>}
					</DialogHeader>
				)}
				<div className={cn("overflow-auto", contentClassName)}>{children}</div>
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
