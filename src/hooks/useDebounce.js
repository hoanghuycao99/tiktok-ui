import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handleTimeout = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(handleTimeout);
    }, [value]);

    return debounceValue;
}

export default useDebounce;
