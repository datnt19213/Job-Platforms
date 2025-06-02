"use client";
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type BreadcrumbItem = {
  label: string;
  href?: string;
  isCurrent?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
};

type BreadcrumbProps = {
  items?: BreadcrumbItem[];
  autoGenerate?: boolean;
  separator?: React.ReactNode;
  className?: string;
  itemClassName?: string;
  activeClassName?: string;
  disabledClassName?: string;
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
  renderItem?: (item: BreadcrumbItem, index: number) => React.ReactNode;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  autoGenerate = false,
  separator = <span className="mx-1 text-gray-400">/</span>,
  className = "",
  itemClassName = "",
  activeClassName = "text-blue-600 font-medium",
  disabledClassName = "text-gray-400 cursor-not-allowed",
  onItemClick,
  renderItem,
}) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const generatedItems: BreadcrumbItem[] = segments.map((segment, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    return {
      label: decodeURIComponent(segment.replace(/-/g, " ")),
      href,
      isCurrent: idx === segments.length - 1,
    };
  });

  const finalItems = items ?? (autoGenerate ? generatedItems : []);

  return (
    <nav className={`flex flex-wrap items-center text-sm ${className}`} aria-label="Breadcrumb">
      {finalItems.map((item, index) => {
        const isLast = index === finalItems.length - 1;
        const isDisabled = item.disabled;

        const handleClick = () => {
          if (isDisabled) return;
          item.onClick?.();
          onItemClick?.(item, index);
        };

        const content = renderItem ? (
          renderItem(item, index)
        ) : item.href && !isLast && !isDisabled ? (
          <Link
            href={item.href}
            onClick={handleClick}
            className={`hover:underline ${itemClassName}`}
          >
            {item.icon && <span className="mr-1">{item.icon}</span>}
            {item.label}
          </Link>
        ) : (
          <span
            onClick={handleClick}
            className={`${itemClassName} ${
              isDisabled ? disabledClassName : isLast ? activeClassName : ""
            }`}
          >
            {item.icon && <span className="mr-1">{item.icon}</span>}
            {item.label}
          </span>
        );

        return (
          <span key={item.href || index} className="flex items-center">
            {index > 0 && separator}
            {content}
          </span>
        );
      })}
    </nav>
  );
};
