import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

export const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    const photosJson = await fetch("/photos.json");
    const { photos } = await photosJson.json();

    setPhotos(photos);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <FavoriteContext.Provider value={{ photos, setPhotos }}>
      {children}
    </FavoriteContext.Provider>
  );
};
