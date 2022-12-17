import { toast } from "react-toastify";

export const TOASTER_TYPES = Object.freeze({
  //Object.freeze değerlerin başka yerlerde değiştirilmesini engeller
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warn",
  ERROR: "error",
});

export const toaster = (message, type = TOASTER_TYPES.INFO) => {
  toast[type](message, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
  });
};
