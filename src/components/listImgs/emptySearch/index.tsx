import useMobile from '../../../hooks/useMobile'
const pets = require('../../../imgs/pets.png')

export const EmptySearch = () => {
    const isMobile = useMobile()
    const classBoxEmpty = isMobile ? '' : 'mt-10 flex flex-col items-center'

    return (
        <div className='flex flex-col items-center' data-testid='show-emptySearch'>
            <div className='w-56 h-auto'>
                <img 
                    alt='dog-logo' 
                    className='object-cover'
                    src={pets} 
                />
            </div>
            <div className={classBoxEmpty}>
                <h1 className='text-3xl 
                    font-semibold 
                    text-center'
                >
                    Aún no realizas una busqueda.
                </h1>
                <h2 className='text-lg 
                    font-normal 
                    text-center'
                >
                    Usa los filtros para iniciar.
                </h2>
            </div>
        </div>
    )
}