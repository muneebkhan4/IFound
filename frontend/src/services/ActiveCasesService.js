import axios from "axios";

export const DeleteActivePost = (postId) => {
    // Handle option change event
    //const _token = localStorage.getItem("x_auth_token");

    return axios.delete(`${process.env.REACT_APP_DOT_NET_API}api/home/DeleteCurrentPost`, {
        headers: {
            Authorization: 'Bearer <token>',
        },
        params: {
            postId: postId,
        },
    });

}

export const GetDashboardStats = (userId) => {
    return axios.get(`${process.env.REACT_APP_DOT_NET_API}api/home/DashboardStats/${userId}`, {
        headers: {
            Authorization: 'Bearer <token>',
        }
    });
}


export const UpdatePostStatus = (postId, postStatus) => {
    console.log("HEHEHE: ",postStatus);
    return axios.put(`${process.env.REACT_APP_DOT_NET_API}api/home/UpdatePostStatus/${postId}`, new Object(postStatus) , {
        headers: {
            Authorization: 'Bearer <token>',
        }
    });
}



