import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingsFromAPI, getGreetings } from '../../redux/greetings/greetings';

import React from "react"

const Greeting = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetingsReducer);

  useEffect(() => {
    const fetchData = async () => {
      const greetingsAPI = await getGreetingsFromAPI();
      dispatch(getGreetings(greetingsAPI));
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <h1>{greetings.message}</h1>
      <br />
    </React.Fragment>
  );
}

export default Greeting;
