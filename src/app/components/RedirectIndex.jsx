'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectIndex() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname === '/index.html') {
      router.replace('/');
    }
  }, [router]);

  return null;
}
