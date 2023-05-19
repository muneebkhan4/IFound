import axios from "axios";

export const GetCurrentPost = (postId,postType) => {
    // Handle option change event
    const token = localStorage.getItem("x_auth_token");

    return axios.get(
        `${process.env.REACT_APP_DOT_NET_API}api/Home/GetCurrentPostPerson`,
        {
            params: {
                postId: postId,
                postType: postType
            },
            headers: {
                x_auth_token: token,
            },
        }
    );

}