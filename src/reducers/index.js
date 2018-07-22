import { combineReducers } from 'redux';

const initialAuthState = {
  isLoggedIn: false,
  casinoName: 'Corporate',
  headerColor: '#1a8cff',
  darkerTint: '#004d99',
};

function auth(state = initialAuthState, action) {
  console.log("*************** In Redux auth: " + action.type)
  switch (action.type) {
    case 'Home':
      return { ...state, casinoName: 'Home', headerColor: '#1a8cff', darkerTint: '#004d99'};
    case 'Account':
      return { ...state, casinoName: 'Account', headerColor: '#1a8cff', darkerTint: '#004d99'};
    case 'Expedia':
      return { ...state, casinoName: 'Expedia', headerColor: '#1a8cff', darkerTint: '#004d99'};
    case 'Travelocity':
      return { ...state, casinoName: 'Travelocity', headerColor: '#1a8cff', darkerTint: '#004d99'};
    case 'Kayak':
        return { ...state, casinoName: 'Kayak', headerColor: '#1a8cff', darkerTint: '#004d99'};
    case 'AirBnB':
        return { ...state, casinoName: 'AirBnB', headerColor: '#1a8cff', darkerTint: '#004d99'};
    case 'Orbitz':
        return { ...state, casinoName: 'Orbitz', headerColor: '#1a8cff', darkerTint: '#004d99'};
    case 'PriceLine':
        return { ...state, casinoName: 'PriceLine', headerColor: '#1a8cff', darkerTint: '#004d99'};
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  auth,
  //Other reducers will go here
});

export default AppReducer;
