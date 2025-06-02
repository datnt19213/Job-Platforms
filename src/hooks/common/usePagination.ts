import {
  useCallback,
  useMemo,
  useState,
} from 'react';

export interface UsePaginationOptions {
  totalItems?: number;
  initialPage?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  onChange?: (page: number, pageSize: number) => void;
}

export const usePagination = ({
  totalItems = 0,
  initialPage = 1,
  pageSize = 10,
  pageSizeOptions = [10, 20, 50, 100],
  onChange,
}: UsePaginationOptions = {}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [currentPageSize, setPageSize] = useState(pageSize);

  const totalPages = useMemo(() => {
    return Math.ceil(totalItems / currentPageSize) || 1;
  }, [totalItems, currentPageSize]);

  const offset = useMemo(() => {
    return (currentPage - 1) * currentPageSize;
  }, [currentPage, currentPageSize]);

  const next = useCallback(() => {
    setCurrentPage((prev) => {
      const nextPage = Math.min(prev + 1, totalPages);
      if (onChange) onChange(nextPage, currentPageSize);
      return nextPage;
    });
  }, [totalPages, onChange, currentPageSize]);

  const prev = useCallback(() => {
    setCurrentPage((prev) => {
      const nextPage = Math.max(prev - 1, 1);
      if (onChange) onChange(nextPage, currentPageSize);
      return nextPage;
    });
  }, [onChange, currentPageSize]);

  const goToPage = useCallback(
    (page: number) => {
      const safePage = Math.max(1, Math.min(page, totalPages));
      setCurrentPage(safePage);
      if (onChange) onChange(safePage, currentPageSize);
    },
    [totalPages, onChange, currentPageSize]
  );

  const changePageSize = useCallback(
    (size: number) => {
      setPageSize(size);
      setCurrentPage(1); // reset to first page
      if (onChange) onChange(1, size);
    },
    [onChange]
  );

  return {
    currentPage,
    currentPageSize,
    totalPages,
    offset,
    limit: currentPageSize,
    next,
    prev,
    goToPage,
    changePageSize,
    pageSizeOptions,
    canGoNext: currentPage < totalPages,
    canGoPrev: currentPage > 1,
  };
};
