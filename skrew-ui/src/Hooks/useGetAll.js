import axiosInstance from '../API/axios';

const useGetAll = () => {

    const getAll = (URL) => {
        return axiosInstance.get(URL)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("error ", error.message);
        })
    }
    return getAll;
}

export default useGetAll;