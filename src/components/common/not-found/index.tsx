import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface NotFoundPageProps {
  title?: string
  message?: string
  buttonText?: string
  homeUrl?: string
  className?: string
  isNavigated?: boolean
}

export default function NotFoundPage({
  title = "404",
  message = "Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable.",
  buttonText = "Go To Home Page",
  homeUrl = "/",
  className = "",
  isNavigated = true,
}: NotFoundPageProps) {
  return (
    <div className={`min-h-screen font-jost flex flex-col items-center justify-start py-12 px-4 w-full ${className}`}>
      <div className="text-center space-y-8 max-w-[750px] mx-auto w-full">
        {/* Large 404 Text */}
        <div className="space-y-4 w-full">
          <h1 className="text-[calc(50px+2vw)] md:text-[300px] font-bold text-[#F31137] leading-none">{title}</h1>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
        </div>

        {/* Error Message */}
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed px-4">{message}</p>

        {/* Home Button */}
        {isNavigated && <div className="pt-4">
          <Button asChild className="px-8 bg-[#1967D2] min-h-[50px] rounded-[8px] py-3 text-base">
            <Link href={homeUrl}>{buttonText}</Link>
          </Button>
        </div>}
      </div>
    </div>
  )
}
