import { useRef, useState } from 'react';
import Styles from './SocialMixerPage.module.css';
import useFocusLock from './hooks/useFocusLock.ts';
import useDelayedInput from './hooks/useDelayedInput.ts';

function SocialMixerPage() {
    const [courts,] = useState((new Array(6)).fill(null))
    const [offrampGames,] = useState((new Array(courts.length)).fill(null));
    const [onrampGames,] = useState((new Array(courts.length)).fill(null));
    const [nfcFocused, setNfcFocused] = useState(true);
    const nfcInput = useRef<HTMLInputElement>(null);
    const [nfcValue, onNfcValueChange] = useDelayedInput(alert)

    useFocusLock(nfcInput, nfcFocused);

    const renderOfframp = (game: any, index: Number) => {
        let className = `${Styles.OfframpGame} ${Styles.OfframpGameEmpty}`;
        if (index === 0) {
            className += ` ${Styles.OfframpGameInstruction}`;
        }

        return (
            <div className={className} />
        )
    }

    const renderOnramp = (game: any, index: Number) => {
        let className = Styles.OnrampGame
        if (index === 0) {
            className += ` ${Styles.OnrampGameInstruction}`;
        }

        return (
            <div className={className}>
                <i className={Styles.ArrowUp} />
            </div>
        )
    }

    // TODO: Use name Bartholomew D.

    return (
        <div className={Styles.Page}>
            <div className={Styles.Layout}>
                <div className={Styles.GameLayout}>
                    {offrampGames.map(renderOfframp)}
                    {courts.map(() => (
                        <div className={Styles.Court}>
                            <i className={Styles.ArrowUp} />
                        </div>
                    ))}
                    {onrampGames.map(renderOnramp)}
                </div>
                <div className={Styles.ControlArea}>
                    <div className={Styles.ControlPanel}>
                        {/* Badminton Social Mixer */}
                    </div>
                </div>
            </div>
            <input
                type='text'
                className={Styles.NFCInput}
                ref={nfcInput}
                onChange={onNfcValueChange}
                value={nfcValue}
            />
        </div>
    )
}

export default SocialMixerPage;
