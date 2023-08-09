import axios from "axios";

const baseUrl: string = import.meta.env
  .VITE_SUNBIRD_DROPDOWN_VALUES_URL as string;

const getDropdownValues = async (): Promise<any> => {
  let response: any = null;
  try {
    response = await axios.get(baseUrl);
  } catch (error) {
    response = error;
  }
  return response;
};

export default getDropdownValues;
