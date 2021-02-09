import Paper from '@material-ui/core/Paper';
import Image from 'next/image'

export function ImgMotivacional({ children }) {
    return (
        
            <Image
                src={ children }
                alt="Picture of the author"
                height={600}
                width={400}
                />
        
    )
}