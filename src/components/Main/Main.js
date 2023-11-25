import Map from '../../assets/images/world-political-map-2020.jpg';
import './Main.scss';

export const Main = () => {
    return (
        <>

        <main className='main'>
            <h1 className='main__header'>Travelpedia</h1>
            <img className='main__map' src={Map} alt="world map" />


        </main>


        </>
    )
}