const authHeader = { Authorization: 'Client-ID 2032c1feddefa31' };

const imgurApi = {
  gallery: {
    search: async (query, page) => {
      const opts = {
        method: 'GET',
        headers: { ...authHeader },
      };

      const response = await fetch(
        `https://api.imgur.com/3/gallery/search/top/all/${page}?q=${query}`,
        //`http://ec2-107-21-76-203.compute-1.amazonaws.com/imgur-proxy/${page}?q=${query}`,
        opts
      ).then(res => res.json());
      if (!response || response.error != null) {
        throw new Error('Failed to fetch gallery data from Imgur');
      }
      return response.data;
    },
  },
};

export default imgurApi;
