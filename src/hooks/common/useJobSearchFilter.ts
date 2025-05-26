import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { useRouter } from 'next/navigation';

export type JobSearchFilters = {
  keyword: string;
  location: string;
  category: string;
  jobType: string;
  experienceLevel: string;
  careerLevel: string;
  qualification: string;
};

const defaultFilters: JobSearchFilters = {
  keyword: '',
  location: '',
  category: '',
  jobType: '',
  experienceLevel: '',
  careerLevel: '',
  qualification: '',
};

export const useJobSearchFilters = (
  onSearch?: (filters: JobSearchFilters) => void,
  initialFilters: Partial<JobSearchFilters> = {}
) => {
  const [filters, setFilters] = useState<JobSearchFilters>({
    ...defaultFilters,
    ...initialFilters,
  });

  const router = useRouter();
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!onSearch) return;

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      onSearch(filters);
    }, 500);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [filters, onSearch]);

  const setFilter = <K extends keyof JobSearchFilters>(
    key: K,
    value: JobSearchFilters[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const applyFilters = () => {
    if (onSearch) onSearch(filters);

    const query = new URLSearchParams();
    Object.entries(filters).forEach(([key, val]) => {
      if (val) query.set(key, val);
    });

    router.push(`?${query.toString()}`);
  };

  return {
    filters,
    setFilter,
    resetFilters,
    applyFilters,
  };
};
