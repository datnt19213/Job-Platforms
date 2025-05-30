"use client";
import React, { useCallback } from 'react';

import { ChevronUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useEventListener } from '@/hooks/common';

const ScrollTopButton = () => {
	const [isShow, setIsShow] = React.useState(false);

  const scrollToShow = useCallback(() => {
    if (window.scrollY > 500) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, []);

	useEventListener("scroll", scrollToShow);


  function handleScroll(e: React.MouseEvent<HTMLButtonElement>): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

	return isShow && (
		<Button
      onClick={handleScroll}
			size="icon"
			className="transform-all  z-50 size-10 cursor-pointer rounded-full fixed bottom-[50px] right-[50px] group bg-[#1967d212] hover:bg-[#1967d2] text-[#1967d2] hover:text-white"
		>
			<ChevronUp strokeWidth={1} />
		</Button>
	);
};

export default ScrollTopButton;
