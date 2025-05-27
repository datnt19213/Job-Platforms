import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { useRouter } from 'next/navigation';

export type CandidateSearchFilters = {
  keyword: string;
  location: string;
  category: string;
  gender: string;
  experienceLevel: string;
  language: string;
  qualification: string;
};

const defaultFilters: CandidateSearchFilters = {
  keyword: '',
  location: '',
  category: '',
  gender: '',
  experienceLevel: '',
  language: '',
  qualification: '',
};

export const useCandidateSearchFilters = (
  onSearch?: (filters: CandidateSearchFilters) => void,
  initialFilters: Partial<CandidateSearchFilters> = {}
) => {
  const [filters, setFilters] = useState<CandidateSearchFilters>({
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

  const setFilter = <K extends keyof CandidateSearchFilters>(
    key: K,
    value: CandidateSearchFilters[K]
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
