/* NgRx */
import { createReducer, on, createAction } from '@ngrx/store';//imports

export const productReducer = createReducer(//productReducer does not change so it is a constant
  { showProductCode: true },//initial state to show product code set to true
  on(createAction('[Product] Toggle Product Code'), state => {//we dispatch this action later.  State gets mapped into a return obj
    return {
      ...state,//copy of state, gets mapped into the opposite of the current property with the ! marker
      showProductCode: !state.showProductCode
      // showProductCode: state.showProductCode = false,
    };
  })
);//interacts with a 'reduced' slice of state. It takes state as an mapped object and returns new state
