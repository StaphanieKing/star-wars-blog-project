import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";



const Vehicles = () => {
    const { store, actions } = useContext(Context);
    const starWarsVehicles = store.vehicles.map((vehicle, index) => {
        return(
            <div key={index} className='card col-sm-4'>
                <div className='card-header'>Vehicle Name: {vehicle.name}</div>
               <img
                src= {`https://starwars-aws.s3.amazonaws.com/img/vehicles/${vehicle.name}.jpg`}/>
                

                

                
                <div className='card-details'>
                    Length {vehicle.length}
                    <br></br>
                    Crew:{vehicle.crew}
                    <br></br>
                    Class:{vehicle.vehicle_class}
                </div>
                <div classname= 'button-card'>
                      <button> 
                        Learn More
                     </button>
                    
                    <button
                    onClick={() => actions.addToFavorites(vehicle.name) }
                    className='fas fa-heart btn'
                    >
                 </button>
                </div>

            </div>
        )
})
        return(
        <div>
            {starWarsVehicles}
        </div>
    )
}


export default Vehicles;



