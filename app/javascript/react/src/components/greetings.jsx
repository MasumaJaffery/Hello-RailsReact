import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/slice';

function Greetings() {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greetings.greetings);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <p>{randomGreeting && randomGreeting.message ? randomGreeting.message : 'No greeting available'}</p>
    </div>
  );
}

export default Greetings;
