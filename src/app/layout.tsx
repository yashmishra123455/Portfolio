import type { Metadata, Viewport } from 'next';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import LoadingScreen from '@/components/ui/LoadingScreen';

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Yash Mishra | AI/ML Specialist & Software Engineer',
  description: 'Portfolio of Yash Mishra, AI/ML Specialist, Data Analyst & Computer Vision Engineer. Specialized in Deep Learning, PyTorch, MediaPipe, OpenCV, and Next.js.',
  keywords: ['Yash Mishra', 'AI Engineer', 'ML Engineer', 'Computer Vision', 'Deep Learning', 'IEEE Published Researcher', 'PyTorch Specialist', 'Next.js Developer', 'Data Analyst'],
  authors: [{ name: 'Yash Mishra' }],
  metadataBase: new URL('https://yashmishra.dev'),
  openGraph: {
    title: 'Yash Mishra | AI/ML Specialist Portfolio',
    description: 'Award-winning developer portfolio showcasing real-time pose safety tracking, low-light image enhancement models, and AI nutrition companions.',
    url: 'https://yashmishra.dev',
    siteName: 'Yash Mishra Portfolio',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Yash Mishra Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yash Mishra | AI/ML Engineer Portfolio',
    description: 'Specialized in Deep Learning, Computer Vision, and High-Performance Data Systems.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050816] text-white selection:bg-cyan-500/30 selection:text-white antialiased overflow-x-hidden">
        <LoadingScreen />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

