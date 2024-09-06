import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
   const [debounceValue, setDebouneValue] = useState(value);

   useEffect(() => {
      const timer = setTimeout(() => setDebouneValue(value), delay);

      return () => clearTimeout(timer);

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [value]);

   return debounceValue;
}

export default useDebounce;
