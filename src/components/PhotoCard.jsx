import IconHeart from "./IconHeart";

export const PhotoCard = ({
  id,
  width,
  height,
  url,
  photographer,
  photographer_url,
  photographer_id,
  avg_color,
  src,
  liked,
  alt,
  handleFavorite
}) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-end cursor-pointer">
          <button onClick={() => handleFavorite(id)}>
            <IconHeart filled={liked}/>
          </button>
        </div>
        <div>
          <figure>
            <img src={src.medium} alt={alt} />
          </figure>
        </div>
        <div>
          <strong>
            <p>{alt}</p>
          </strong>
        </div>
        <div>
          <p>{photographer}</p>
        </div>
      </div>
    </>
  );
};
