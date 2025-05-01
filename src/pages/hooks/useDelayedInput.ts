import React, { useState } from "react";

function useDelayedInput(capturedInputCallback: CallableFunction): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] {
    const [value, setValue] = useState('');
    const [previousChangeTime, setPreviousChangeTime] = useState<number | null>(null);
    const [decisionTimer, setDecisionTimer] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (decisionTimer !== null) {
            clearTimeout(decisionTimer);
        }

        if (previousChangeTime === null) {
            setValue(e.currentTarget.value);
        } else {
            const currentTime = Date.now();

            // reset if typing is too slow
            if (currentTime - previousChangeTime > 200) {
                setValue('')
                setPreviousChangeTime(null)
                return;
            }

            setPreviousChangeTime(currentTime);
        }

        const newValue = e.currentTarget.value;

        // capture value after 400 ms of no typing
        setDecisionTimer(setTimeout(() => {
            // unique IDs will be at least 5 characters
            if (newValue.length > 5) {
                capturedInputCallback(newValue);
            }
            setValue('');
            setPreviousChangeTime(null);
        }, 400))
    }

    return [value, handleChange]
}

export default useDelayedInput;
