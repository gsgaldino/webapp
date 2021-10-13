import * as React from 'react';

export const useFetch = (endpoint, options = {}) => {
  const [state, setState] = React.useState({
    isLoading: true,
    value: null,
    error: null
  });

  React.useEffect(() => {
    const url = `http://localhost:3333/${endpoint}`;
    
    fetch(url, options)
      .then(async response => {
        const json = await response.json();
        setState({...state, value: json});
      })
      .catch(error => {
        setState({...state, error: error})
      })
      .finally(() => {
        setState({...state, isLoading: false})
      })
  }, [endpoint]);

  return {
    isLoading: state.isLoading,
    error: state.error,
    value: state.value
  };
};
