import axios from "axios";

const axiospublic=axios.create({
    baseURL:'https://grenn-tree-plantnet-serverside-proj.vercel.app/'
})
const AxiosPublic = () => {
    return axiospublic
};

export default AxiosPublic;