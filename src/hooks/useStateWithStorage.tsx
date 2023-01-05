/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function useStateWithStorage(
  key: string,
  defaultValue: any
) {

  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item || defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  useEffect(() => {
    const item = localStorage.getItem(key);
    setValue(item || defaultValue);
  });

  return [value, setValue] as [any, React.Dispatch<any>];
}
