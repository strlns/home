import { useEffect, useRef } from "react";

export default function usePrevious<T>(value: T): T | null {
  const ref = useRef<T | null>(null);

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
