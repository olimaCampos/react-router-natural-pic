import { useContext } from "react";
import { FavoriteContext } from "../context/ContextProvider";
import { PhotoCard } from "../components/PhotoCard";

const Favorites = () => {
  const { photos } = useContext(FavoriteContext);
  const filteredPhotos = photos.filter((photo) => photo.liked === true);

  return (
    <div>
      <h1>Favorite Photos</h1>
      <div>
        {filteredPhotos.map((photo, key) => (
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
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites