import { acceptFriendRequest, addNewFriend, getMyFriends } from "../../../api/friends.axios";

export interface FriendsActionTypes {
    type: string;
    payload?: any;
}

export const getAllFriendsAction = async (dispatch: Function, id: number) => {
    dispatch({
        type: 'GET_FRIENDS_REQUEST',
    });
    try {
        const response = await getMyFriends(id);
        dispatch({
            type: 'GET_FRIENDS_SUCCESS',
            payload: response,
        });
    } catch (error) {
        console.log(error);
    }
}

export const createNewFriendRequestAction = (dispatch: Function, data: any) => {
    dispatch({
        type: 'CREATE_FRIEND_REQUEST',
    });
    try {
        const response = addNewFriend(data);
        dispatch({
            type: 'CREATE_FRIEND_SUCCESS',
            payload: response,
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateFriendRequestAction = (dispatch: Function, srcId: number, destId: number) => {
    dispatch({
        type: 'UPDATE_FRIEND_REQUEST',
    });
    try {
        const response = acceptFriendRequest(srcId, destId);
        dispatch({
            type: 'UPDATE_FRIEND_SUCCESS',
            payload: response,
        });
    } catch (error) {
        console.log(error);
    }
}