import { useState } from 'react';
import Styles from './SocialMixerPage.module.css';

function SocialMixerPage() {
    const [courts,] = useState([
        {}, {}, {}, {}, {}, {},
    ])
    const [offrampGames,] = useState((new Array(courts.length)).fill(null));
    const [onrampGames,] = useState((new Array(courts.length)).fill(null))

    // tslint:disable-next-line
    const renderOfframp = (game: any, index: Number) => {
        console.log(game)
        let className = `${Styles.OfframpGame} ${Styles.OfframpGameEmpty}`;
        if (index === 0) {
            className += ` ${Styles.OfframpGameInstruction}`;
        }

        return (
            <div className={className} />
        )
    }

    // tslint:disable-next-line
    const renderOnramp = (game: any, index: Number) => {
        console.log(game)
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
                    Badminton Social Mixer
                </div>
            </div>
        </div>
    )
}

export default SocialMixerPage;
