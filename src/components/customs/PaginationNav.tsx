import React from 'react';

import clsx from 'clsx';

interface PaginationNavProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number; // number max (default 5)
  showPrevNext?: boolean;
  className?: string;
  prevButton?: ({currentPage, disabled, onClick}:{currentPage?: number, disabled?: boolean, onClick?: () => void}) => React.ReactNode;
  nextButton?: ({currentPage, disabled, onClick}:{currentPage?: number, disabled?: boolean, onClick?: () => void}) => React.ReactNode;
  numberButton?: ({page, currentPage, active, onClick}:{page?: number, currentPage?: number, active?: boolean, onClick?: () => void}) => React.ReactNode;
}

export const PaginationNav: React.FC<PaginationNavProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
  showPrevNext = true,
  className,
  prevButton,
  nextButton,
  numberButton,
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | 'dots')[] = [];

    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (currentPage <= half) {
      end = Math.min(totalPages, maxVisiblePages);
    } else if (currentPage + half >= totalPages) {
      start = Math.max(1, totalPages - maxVisiblePages + 1);
    }

    // Add first page and ellipsis if needed
    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push('dots');
    }

    // Add middle pages
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add ellipsis and last page if needed
    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('dots');
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav className={clsx('flex items-center gap-1', className)}>
      {showPrevNext && !prevButton && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="px-2 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
      )}
      {showPrevNext && prevButton && prevButton({currentPage: currentPage, disabled:currentPage <= 1, onClick:() => onPageChange(currentPage - 1)})}

      {pages.map((page, idx) =>
        page === 'dots' ? (
          <span key={idx} className="px-2 text-gray-500 select-none">
            ...
          </span>
        ) : numberButton ? numberButton({page,currentPage: currentPage, active: page === currentPage, onClick:() => onPageChange(page)}) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={clsx(
              'px-2 py-1 border rounded',
              page === currentPage
                ? 'bg-blue-600 text-white font-semibold'
                : 'hover:bg-gray-100'
            )}
          >
            {page}
          </button>
        )
      )}

      {showPrevNext && nextButton && nextButton({currentPage: currentPage, disabled:currentPage >= totalPages, onClick:() => onPageChange(currentPage + 1)})}
      {showPrevNext && !nextButton && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="px-2 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      )}
    </nav>
  );
};
