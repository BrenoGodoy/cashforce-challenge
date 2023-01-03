import { http } from "./config";

export default {
  list:() => {
    return http.get('orders');
  },
  buyersById:(id) => {
    const name = http.get(`buyers/${id}`).then(res => res.data.name);
    return name;
  },
  providersById:(id) => {
    const name = http.get(`providers/${id}`).then(res => res.data.name);

    return name;
  },
};
