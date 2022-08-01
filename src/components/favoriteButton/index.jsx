import React, { useContext } from "react"
import FavoriteContext from "../../context/favoritesContext"
import { Button } from "./styles"

export function FavoriteButton(props){

    const {favoriteProfiles, updateFavoriteProfiles} = useContext(FavoriteContext)
    const {profile} = props

    const heart = favoriteProfiles.includes(profile?.name) ? "❤️" : "🖤";

    const onHeartClick = () => {
        
        updateFavoriteProfiles(profile?.name)
    }
    return(

        <Button onClick={onHeartClick}>{heart}</Button>
    )
}