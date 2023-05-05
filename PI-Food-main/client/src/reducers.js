const initialState = {
    hasEnteredHomePage: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ENTER_HOME_PAGE':
        return {
          ...state,
          hasEnteredHomePage: true,
        };
      default:
        return state;
    }
  };
  
  export default reducer;