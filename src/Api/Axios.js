import axios from "axios";

// Function to handle POST request
const post = async (url, data) => {
    try {
        const response = await axios.post(url, data, {
           
        });
        console.log("Successfully", response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

// Function to handle GET request
const get = async (url) => {
    try {
        const response = await axios.get(url);
        console.log("Successfully", response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

// Function to handle PUT request
const put = async (url, data) => {
    try {
        const response = await axios.put(url, data, {
            headers: { "Content-Type": "application/json" }
        });
        console.log("Successfully", response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

// Function to handle DELETE request
const remove = async (url) => {
    try {
        const response = await axios.delete(url);
        console.log("Successfully", response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export { post, get, put, remove };
