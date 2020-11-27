import { useState } from 'react';

function useToggleState(initialValue = false) {
  const [state, setState] = useState(state);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}

export default useToggleState;
