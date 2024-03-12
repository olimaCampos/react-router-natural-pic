import { useContext } from "react";
import { FavoriteContext } from "../context/ContextProvider";
import { PhotoCard } from "./PhotoCard";

const Gallery = () => {
  const { photos, setPhotos } = useContext(FavoriteContext);

  const handleFavorite = (id) => {
    const newFavorite = photos.map((photo) => 
      photo.id === id ? {...photo, liked: !photo.liked} : photo
    )

    setPhotos(newFavorite)
  }

  return (
    <div className="flex flex-wrap gap-3 p-3">
      {photos.map((photo, key) => (
        <PhotoCard
          key={key}
          id={photo.id}
          width={photo.width}
          height={photo.height}
          url={photo.url}
          photographer={photo.photographer}
          photographer_url={photo.photographer_url}
          photographer_id={photo.photographer_id}
          avg_color={photo.avg_color}
          src={photo.src}
          liked={photo.liked}
          alt={photo.alt}
          handleFavorite={handleFavorite}
        />
      ))}
    </div>
  );
};
export default Gallery;
