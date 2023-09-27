import useMobile from '../../../hooks/useMobile'
const dog = require('../../../imgs/dog.png')

export const LogoDog = () => {
    const isMobile = useMobile()
    const boxLogo = isMobile 
        ? 'h-24 w-full flex-row p-3 justify-around' 
        : 'shadow-md rounded-xl mt-3 flex-col justify-center p-0'
    const containerImg = isMobile ? 'w-20 h-20 p-1' : 'w-32 h-32 overflow-hidden mt-6'
    
    return (
        <div 
            className={`${boxLogo} 
            bg-gradient-to-r from-sky-200 to-indigo-200 
            flex 
            items-center`}
        >
            <div 
                className={`${containerImg}
                rounded-full 
                bg-orange-400`}
            >
                <img 
                    alt='dog-logo' 
                    className='object-cover'
                    src={dog} 
                />
            </div>
            <div className='my-2'>
                <h2 className='text-3xl font-bold text-center'>Explora razas caninas</h2>
            </div>
        </div>
    )
}