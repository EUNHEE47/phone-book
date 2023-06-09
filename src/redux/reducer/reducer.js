/* eslint-disable default-case */
let initialState = {
  contact: [],
  keyword: "",
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  // console.log("action ?", action);

  switch (type) {
    case "ADD_CONTACT":
      state.contact.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;

    case "SEARCH_BY_NAME":
      state.keyword = payload.keyword;
      break;
  }
  return { ...state };
}

export default reducer;
