import imgurApi from '../utils/imgurApi';
// import mockApi from '../utils/mockApi';

// const isDebugging = false;
// const fetchGalleryData = (query, page) =>
//   (isDebugging ? mockApi : imgurApi).gallery.search(query, page);

const fetchGalleryData = (query, page) => imgurApi.gallery.search(query, page);

export const fetchImages = async (query, page) => {
  const galleryData = await fetchGalleryData(query, page);
  const images = galleryData
    .filter(gallery => gallery.images && gallery.images.length > 0)
    .map(gallery => {
      const image = gallery.images.find(image => image.type !== 'image/gif');
      if (!image) {
        return null;
      }
      const { title } = gallery;
      const { id, link, width, height } = image;
      return { title, id, link, width, height };
    })
    .filter(it => it !== null);
  return images;
};
