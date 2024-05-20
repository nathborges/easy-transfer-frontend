import AxiosFactory from './axios.factory';


const coreApiUrl = import.meta.env.VITE_CORE_URL || 'http://localhost:3000';
const commonInstance = AxiosFactory(coreApiUrl);

export default commonInstance;
