import axios from "axios";

export const GetUserByLocalID = (userID) => {
    // Handle option change event
    return axios.get(`${process.env.REACT_APP_NODE_API}api/postUploadedBy/${userID}`);
}