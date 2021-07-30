import axios from "axios";

export const postsProvider = async () => {
    try {
        const result = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return result.data;
    } catch (err) {
        return "Network Error";
    }
};