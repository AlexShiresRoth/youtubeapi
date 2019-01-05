import axios from 'axios';

const KEY= 'AIzaSyBblZ6emkZEy26e1B6M3zEqbPL97JSVQJ0';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
