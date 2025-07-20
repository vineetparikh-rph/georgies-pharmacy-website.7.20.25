import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function Redirect404() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation('/'); // Redirect to Home
  }, [setLocation]);

  return null; // Optional: add loading spinner if desired
}
