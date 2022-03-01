import axios from "axios";

export default class StatisticService {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:5000/api/statistics",
      withCredentials: true,
    });
  }

  get = () => this.instance.get("/");
  getOne = (id) => this.instance.get(`/${id}`);
}
