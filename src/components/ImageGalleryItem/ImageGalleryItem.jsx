export function ImageGalleryItem({
  handleClick,
  alt,
  image: { webformatURL, largeImageURL },
}) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={e => handleClick(e, largeImageURL)}
      />
    </li>
  );
}
