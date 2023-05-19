import axios from "axios";

export const DeleteActivePost = (postId) => {
    // Handle option change event
    const token = localStorage.getItem("x_auth_token");

    return axios.delete(`${process.env.REACT_APP_DOT_NET_API}api/home/DeleteCurrentPost`, {
        headers: {
            Authorization: 'Bearer <token>',
        },
        params: {
            postId: postId,
        },
    });

}