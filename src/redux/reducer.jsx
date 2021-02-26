import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};


// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ADD_ITEM:
      return {
        ...state,
        wishList: [...state.wishList, action.payload]
      };

    case DELETE_ITEM:
      const { wishList } = state;
      const itemIdToBeDeleted = action.payload;
      let newWishList = [...wishList];
      const arrayIndex = wishList.findIndex(item => item === itemIdToBeDeleted);

      if (arrayIndex !== -1) {
        newWishList.splice(arrayIndex, 1);
       }

      return {
        ...state,
        wishList: newWishList
      };

    default:
      return state;
  }
};

export default reducer;
