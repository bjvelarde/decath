import axios from 'axios';

const getPagination = (headers) => {
  if (headers.link) {
    const links = headers.link.split(',');
    return links.map(a => {
      const [url, title] = a.split(';');
      const urlTimmed = url.trim();
      const page = urlTimmed.substr(1, urlTimmed.length - 2).match(/&page=(\d+)/)[1];

      return {
        page,
        title: title.trim().match(/^rel="(.+)"$/)[1]
      };
    });
  }
  return [];
}

const fetchRepos = async ({
  page = 1,
  per_page = 5,
  sortBy = 'full_name',
  filter = 'all',
  sortOrder = 'asc'
}) => {
  const {REACT_APP_REPO_LIST_URL: listUrl} = process.env;
  const fetchUrl = `${listUrl}?type=${filter}&sort=${sortBy}&direction=${sortOrder}&page=${page}&per_page=${per_page}`;
  const response = await axios.get(fetchUrl, {
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  });

  return {
    pagination: getPagination(response.headers),
    data: response.data
  };
}

export default fetchRepos;