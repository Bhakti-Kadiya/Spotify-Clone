export const initialState = {
    user: null,
    palylists: [],
    playing: false,
    item: null,
    token: "4gxdvzo4u8xn1gf87ch3sg7eb",
};

const reducer = (state, action) =>{
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
            ...state,
            user: action.user,
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token,
            }
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;

        
    }

};

export default reducer;