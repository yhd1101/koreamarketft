import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchProductById = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/api/product/${id}`)
    console.log(data)
    return data
}

const useFetchProductById = (id) =>
    useQuery(["product", id], () => fetchProductById(id))


export default useFetchProductById;