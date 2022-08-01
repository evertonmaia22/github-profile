import React, { useContext, useState } from 'react';
import { MainContainer } from '../components/container';
import { Header } from '../components/header';
import UserContainer from '../components/userContainer';
import { UserPicture } from '../components/userPicture';
import { UserDetails } from '../components/userDetails';
import { UserNumbers } from '../components/userNumbers';
import { context } from '../context'
import { FavoriteProvider } from '../context/favoritesContext';



export function Home() {

    const ctx = useContext(context);

    const [favorites, setFavorites] = useState([])

    const updateFavoriteProfiles = (name) => {
        const updateFavorites = [...favorites]
        const favoriteIndex = favorites.indexOf(name)

        if (favoriteIndex >= 0) {
            updateFavorites.slice(favoriteIndex, 1)
        }else{
            updateFavorites.push(name);
        }
        setFavorites(updateFavorites);  
    }
        
    return (   
        
        <FavoriteProvider
        value={{favoriteProfiles: favorites, updateFavoriteProfiles: updateFavoriteProfiles}}
        >
            <MainContainer>
                <Header />
                <UserContainer>
                    {ctx.userData?.name ?
                        <React.Fragment>
                            <UserPicture url={ctx.userData?.avatar_url} alternativeText={ctx.userData?.login} />
                            <UserDetails name={ctx.userData?.name} login={ctx.userData?.login} bio={ctx.userData?.bio} />
                            <UserNumbers repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following} />
                        </React.Fragment>
                        : undefined}
                </UserContainer>
            </MainContainer>
            </FavoriteProvider>
    );
}