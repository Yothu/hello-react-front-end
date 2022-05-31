const GET_GREETINGS = 'HELLO_REACT_BACK_END/GREETINGS/GET_GREETINGS';

const initialState = {
  message: 'Original Hello!'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

const getGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});

const getGreetingsFromAPI = async () => {
  const API_URL = 'http://127.0.0.1:3000/v1/greeting';
  const RESPONSE = await fetch(API_URL);
  if (await RESPONSE.ok) {
    const GREETING = await RESPONSE.json();
    return GREETING.greetings[0];
  }
  return [];
};

export default reducer;
export {
  getGreetingsFromAPI, getGreetings,
};