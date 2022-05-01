import axios from 'axios';

const fetchData = async (num) => {
  const PATH = process.env.REACT_APP_BACKEND_URL;

  const response = await axios
    .get(`${PATH}/api/meow`, {
      params: { num, name: 'cat', status: 'cute' },
      headers: { Authorization: '내 토큰 보내주기' },
    })
    .then((response) => {
      // console.log(response);
      // return response.data;
    })
    .catch((error) => {
      // console.log(error);
    });
  return response;
};

export default fetchData;
