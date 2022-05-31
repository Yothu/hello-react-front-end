const GET_GREETINGS = 'HELLO_REACT_BACK_END/GREETINGS/GET_GREETINGS';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      console.log('REDUCER GET_GREETINGS');
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
  console.log('FETCH METHOD');
  const API_URL = 'v1/greeting';
  const RESPONSE = await fetch(API_URL);
  if (await RESPONSE.ok) {
    console.log('GOT THEM!');
    const GREETING = await RESPONSE.json();
    return GREETING;
  }
  return [];
};

export default reducer;
export {
  getGreetingsFromAPI, getGreetings,
};