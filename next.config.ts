import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
        domains: ['s5u7yrgbcfphwffz.public.blob.vercel-storage.com'], // Dodaj swoją domenę
    },
    matcher: ['/wiktoria/:path*'],
};

export default nextConfig;
