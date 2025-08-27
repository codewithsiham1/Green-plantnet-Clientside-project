import axios from "axios";

const axiospublic=axios.create({
    baseURL:'https://tree-plantnet-server-side-project.vercel.app/'
})
const AxiosPublic = () => {
    return axiospublic
};

export default AxiosPublic;