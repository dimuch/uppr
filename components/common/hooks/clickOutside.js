import { useEffect } from 'react';

export const useClickOutside = (ref, onClickOutside, onClickInside) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
                return;
            }

            onClickInside();
        }
        // Bind
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // dispose
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClickOutside, onClickInside]);
}
