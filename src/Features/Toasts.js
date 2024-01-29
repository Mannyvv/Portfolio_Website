import { toast } from 'react-toastify';

export const sentNotifcation = () =>
    toast.success("Your messsage has been sent. Thank you", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
