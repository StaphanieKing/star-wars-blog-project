import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const People =() => {

    const{ store,actions} = useContext(Context);
    const starWarsCharacter = store.people.map((character,index)=> {
        return(
            <div key={index} className='card col-sm-4'>
                <div className='card-header'>Character Name: {character.name}</div>
                <img
               src={`https://starwars-aws.s3.amazonaws.com/img/characters/${character.name}.jpg`}

             />
            
                <div className='card-details'>
                    Chracter Height{character.height}
                    <br></br>
                    Character Birthday:{character.birth_year}

                </div>
                <div classname= 'button-card'>
                      <button> 
                        Learn More
                     </button>
                    
                    <button
                    onClick={() => actions.addToFavorites(character.name) }
                    className='fas fa-heart btn'
                    >
                 </button>
                </div>
            </div>
        )
    })


    return (

        <div>
            {starWarsCharacter}
        </div>
    )
    
}

export default People;