import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ErrorMessage = (error) => {
  return toast.error(error, {
    theme: 'dark',
  });
};

export default ErrorMessage;
