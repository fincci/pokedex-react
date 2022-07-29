import { ThemeTogglerBtn } from '../theme-toggler-btn/theme-toggler-btn'
import './pokedex-hud.css'

export const PokedexHud = ({ children }) => {
    return (
        <main className='main'>
            <div className='pokedex'>
                <div className='top-style'>
                    <div className='left-details'>
                        <div className='ball-border'>
                            <div className='ball-dot'>
                                <div className='ball-shadow'>
                                    <div className='ball-inside'>
                                        <div className='ball-white-dot'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='top-dots'>
                            <div className='top-dot dot1'></div>
                            <div className='top-dot dot2'></div>
                            <div className='top-dot dot3'></div>
                        </div>
                    </div>
                    <ThemeTogglerBtn />
                </div>
                <div className='border'>
                    <div className='border-top'>
                        <div className='dots'>
                            <div className='dot'></div>
                            <div className='dot'></div>
                        </div>
                    </div>
                    <div className='children'>{children}</div>
                    <div className='border-bottom'>
                        <div className='bigger-dot'></div>
                        <div className='hamburger-container'>
                            <div className='hamburger1'></div>
                            <div className='hamburger2'></div>
                            <div className='hamburger3'></div>
                            <div className='hamburger4'></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}