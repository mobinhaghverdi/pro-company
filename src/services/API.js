import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const callRegister = async (data) => {
  return await axios
    .post(
      "https://api.freerealapi.com/auth/register",
      JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      toast.success(response.data.message);
      return true;
    })
    .catch((err) => {
      toast.error("You have been registered before!");
      return false;
    });
};
