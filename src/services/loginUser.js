import authApi from "./api";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

const loginUser = async (userInput) => {
    const { data } = await axios.post("http://localhost:8000/api/auth/login", userInput)
    console.log("2222222222", data)
    return data
}

const useLoginUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput) => loginUser(userInput),
        onSuccess: (data) => {
            localStorage.setItem("token", data.token)
            queryClient.invalidateQueries({
                queryKey: ['users'],
            })
        }
    })
}
export default useLoginUser