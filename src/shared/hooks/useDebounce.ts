import { useCallback, useEffect, useState } from "react";

type Primitive = string | number | boolean | symbol | null | undefined;
type ValueType = Primitive | Record<string, unknown>;

export default function useDebounce<T extends ValueType>(
  value: T,
  delay = 300
) {
  const [debounceValue, setDebounceValue] = useState(value);
  const setDebouncedValue = useCallback(
    (newValue: T) => {
      if (newValue !== debounceValue) {
        setDebounceValue(newValue);
      }
    },
    [debounceValue]
  );

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, setDebouncedValue]);

  return debounceValue;
}
