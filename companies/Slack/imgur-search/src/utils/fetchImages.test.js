import imgurApi from '../utils/imgurApi';
import { fetchImages } from './fetchImages';

const galleryData = [
  {
    title: 'gallery1',
    images: [
      {
        id: '2FWIdys',
        title: null,
        description: '#cat #mlem #poobrain',
        datetime: 1506210712,
        type: 'image/jpeg',
        animated: false,
        width: 4032,
        height: 3024,
        size: 1743051,
        views: 634,
        bandwidth: 1105094334,
        vote: null,
        favorite: false,
        nsfw: null,
        section: null,
        account_url: null,
        account_id: null,
        is_ad: false,
        in_most_viral: false,
        has_sound: false,
        tags: [],
        ad_type: 0,
        ad_url: '',
        in_gallery: false,
        link: 'https://i.imgur.com/2FWIdys.jpg',
        comment_count: null,
        ups: null,
        downs: null,
        points: null,
        score: null,
      },
    ],
  },
  {
    title: 'gallery2',
    images: [],
  },
];

describe('fetchImages', () => {
  let spy = null;

  beforeEach(() => {
    spy = jest.spyOn(imgurApi.gallery, 'search').mockImplementation(() => galleryData);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should make an API call', () => {
    fetchImages();
    expect(imgurApi.gallery.search).toBeCalled();
  });

  it('should convert fetched data to images', async () => {
    const images = await fetchImages();
    expect(images).toEqual([
      {
        title: 'gallery1',
        id: '2FWIdys',
        link: 'https://i.imgur.com/2FWIdys.jpg',
        width: 4032,
        height: 3024,
      },
    ]);
  });
});
