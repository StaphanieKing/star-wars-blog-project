import React

 from "react";
 const Favorites = () =>
 
 const (store, actions) =useContext(Context)

 const favList = store.favorites.map((fav) => {
    return (
        <li key={fav.name}>
            {fav.name}
        </li>
    )
})


return (
    <div>
        <ul>
            {favList}
        </ul>
    </div>
)
}

export default Favorites