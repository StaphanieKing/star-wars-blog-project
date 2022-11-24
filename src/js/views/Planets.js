import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';



const Planets =() => {

    const{ store,actions} = useContext(Context);
    const starWarsPlanets = store.planets.map((planet,index)=> {
        return(
            <div key={index} className='container'>
                <div className='card-header'>Planet Name: {planet.name}</div>
                <img
               src={`https://starwars-aws.s3.amazonaws.com/img/planets/${planet.name}.jpg`}

             />
            
                <div className='card-details'>
                    Planet Climate {planet.climate}
                    <br></br>
                    Planet Population:{planet.population}

                </div>
                <div classname= 'button-card'>
                      <button> 
                        Learn More
                     </button>
                    
                    <button
                    onClick={() => actions.addToFavorites(planet.name) }
                    className='fas fa-heart btn'
                    >
                 </button>
                </div>


    
            </div>
        )
    })


    return (

        <div>
            {starWarsPlanets}
        </div>
    )
    
}

export default Planets;







