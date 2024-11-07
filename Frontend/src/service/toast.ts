import { toast } from "react-toastify";

const showSuccess = (message: string) => {
  toast.success(message);
};

const showError = (message: string) => {
  toast.error(message);
};

const showWaring = (message: string) => {
  toast.warn(message);
};

export { showSuccess, showError, showWaring };
