import { Action } from './constants';

function speakersReducer(state, action) {
  switch (action.type) {
    case Action.SetSpeakerList: return action.data;
    case Action.Favorite: return updateFavorite(true);
    case Action.Unfavorite: return updateFavorite(false);
    default: return state;
  }
}

function updateFavorite(favoriteValue) {
  return state.map(item => {
    if (item.id === action.sessionId) {
      item.favorite = favoriteValue;
      return item;
    }
    return item;
  });
}

export default speakersReducer;