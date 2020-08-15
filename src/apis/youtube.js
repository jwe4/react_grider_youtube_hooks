import axios from 'axios';

const KEY = 'AIzaSyDei2V7hyxHTjvv9QxPDwH_1gP9zUzhdFQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
