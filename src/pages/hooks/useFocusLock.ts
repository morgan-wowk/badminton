import { useEffect } from 'react';

function useFocusLock(refElement: React.RefObject<HTMLInputElement | null>, focusLocked: boolean) {
    const handleNfcLoseFocus = () => {
        if (focusLocked && refElement && refElement.current) {
            refElement.current.focus();
        }
    }

    useEffect(() => {
        if (refElement && refElement.current) {
            refElement.current.removeEventListener('focusout', handleNfcLoseFocus);
            refElement.current.addEventListener('focusout', handleNfcLoseFocus);

            if (focusLocked) {
                refElement.current.focus();
            }
        }
    }, [refElement])
}

export default useFocusLock;
