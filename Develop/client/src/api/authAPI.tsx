import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await axios.post('/api/login', userInfo);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}



export { login };
