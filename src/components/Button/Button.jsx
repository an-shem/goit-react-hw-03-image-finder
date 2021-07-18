import { GalleryButton } from './Button.styled';

export function Button({ onClick }) {
  return (
    <GalleryButton type="button" onClick={onClick}>
      Load more
    </GalleryButton>
  );
}
