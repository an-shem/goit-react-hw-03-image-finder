import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ imagesList, alt, handleClick }) {
  return (
    <ul className="ImageGallery">
      {imagesList.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          alt={alt}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
}
