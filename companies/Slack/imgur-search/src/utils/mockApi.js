import gallery1 from '../data/gallery.json';
import gallery2 from '../data/gallery2.json';
import gallery3 from '../data/gallery3.json';

const galleryData = [gallery1, gallery2, gallery3];

const mockApi = {
  gallery: {
    search: async (query, page) => {
      if (page < 3) {
        return Promise.resolve(galleryData[page].data);
      } else {
        return [];
      }
    },
  },
};

export default mockApi;
