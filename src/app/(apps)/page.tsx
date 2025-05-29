import { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { HomePage } from '@/features/home';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home page',
    openGraph: {
      title: "Jobs Platform - Home",
      description: "Home page",
      url: `https://example.com/blog/1`,
      images: [
        {
          url: 'https://example.com/default-og.jpg',
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Jobs Platform - Home",
      description: "Home page",
      images: ["https://example.com/default-og.jpg"],
    },
  };
export default function Home() {
	return <HomePage />;
}
