import { useState } from 'react';
import Styles from './SocialMixerPage.module.css';

function SocialMixerPage() {
    const [courts, setCourts] = useState([
        {}, {}, {}, {}, {}, {},
    ])
    const [offrampGames, setOfframpGames] = useState((new Array(courts.length)).fill(null));
    const [onrampGames, setOnrampGames] = useState((new Array(courts.length)).fill(null))

    // TODO: Use name Bartholomew D.

    return (
        <div className={Styles.Layout}>
            <div className={Styles.GameLayout}>
                {offrampGames.map((og, i) => (
                    <div className={Styles.OfframpGame}>{`Offramp ${i}`}</div>
                ))}
                {courts.map((c, i) => (
                    <div className={Styles.Court}>
                        <i className={Styles.ArrowUp} />
                        {`Court ${i}`}
                    </div>
                ))}
                {onrampGames.map((og, i) => (
                    <div className={Styles.OnrampGame}>
                        <i className={Styles.ArrowUp} />
                        {`Onramp ${i}`}
                    </div>
                ))}
            </div>
            <div className={Styles.ControlArea}>
                <div className={Styles.ControlPanel}>

                </div>
            </div>
        </div>
    )
}

export default SocialMixerPage;
