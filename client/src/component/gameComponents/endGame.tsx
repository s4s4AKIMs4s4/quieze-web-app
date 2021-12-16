import { useEffect, useRef } from 'react'
import useStyles from '../cssModules/game'
import Celebration from '../../images/celebration.svg'


export const EndGame = () => {
    const classes = useStyles();
    const refImage = useRef<HTMLImageElement>({} as HTMLImageElement)

    useEffect(() => {
        refImage.current.src = Celebration
    }, [])
    return (
        <div className = {classes.end}> 
                        <div className = {classes.end__titleWrapper}>
                            <h1 className = {classes.end__title}>This is the end</h1>
                        </div>
                        <img ref = {refImage} className = {classes.end__image} />
                    </div>
    )
}
