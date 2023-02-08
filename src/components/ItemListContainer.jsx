import App from "../App";
import librouno from '../assets/img/Book_Covers/death_on_the_nile.jpeg'
import librodos from '../assets/img/Book_Covers/Attack_On_Titan.jpg'
import librotres from '../assets/img/Book_Covers/Dan Brown- Da Vinci Code.jpg'


const ItemListContainer = () => {
  return (
    <>
     <div className="container-fluid">
            <div className='row justify-content-around'>      
                <div className="col-3">
                    <div className="card">
                        <figure className='imagen-uno-tamanio'>
                            <img src={librouno}></img>
                        </figure>
                        <div className="contenido">
                            <h3>Death on the Nile</h3>
                        </div>
                </div>
                </div>
                <div className="col-3">
                        <div className="card">
                            <figure className='imagen-dos-tamanio'>
                                <img src={librodos}></img>
                            </figure>
                            <div className="contenido">
                                <h3>Attack on titan</h3>
                            </div>
                        </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <figure className='imagen-tres-tamanio'>
                            <img src={librotres}></img>
                        </figure>
                        <div className="contenido">
                            <h3>Da Vinchi Code</h3>
                        </div>
                    </div>
                </div>

            </div>             

        </div>

   
    </>
  )
}

export default ItemListContainer;