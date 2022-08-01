import React from "react";

const FavoriteContext = React.createContext({
    favoriteProfiles: [],
    updateFavoriteProfiles: (name) => null
});

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext;