const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			vehicles:[],
			planets:[],
			favorites:[],

			
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: () => {
			   fetch("https://swapi.dev/api/people/")
			   .then(data => data.json())
			   .then(res => setStore({people:res.results}))
			

			},
			getVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/")
				.then(data => data.json())
				.then(res => setStore({vehicles:res.results}))
			},	

			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
				.then(data => data.json())
				.then(res => setStore({planets:res.results}))

			},	
			
			addToFavorites:(name) => {
				const newFav = {name:name}
			    setStore({favorites:getStore().favorites.concat(newFav)})
			},

			deleteFromfavorites:(name) => {
				const delFav =getStore().favorites.filter
			}


		
			

		}
	};
};

export default getState;
