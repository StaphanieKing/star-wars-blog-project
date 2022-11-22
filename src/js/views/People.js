import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const People =() => {

    const{ store,actions} = useContext(Context);
    const starWarsCharacter = store.people.map((character,index)=> {
        return(
            <div key={index} className='conatiner'>
                <div className='card-header'>Character Name: {character.name}</div>
                <div className='card-details'>
                    Chracter Height{character.height}
                    <br></br>
                    Character Birthday:{character.birth_year}

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