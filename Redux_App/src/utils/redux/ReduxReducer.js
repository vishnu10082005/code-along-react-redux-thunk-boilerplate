import { FETCH_DATA } from "./actionPayloadtype";

const initialStateofuser = {
    user: [],
};

export const reducer = (storeData = initialStateofuser, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                user: action.payload,
            };
        default:
            return storeData;
    }
};
