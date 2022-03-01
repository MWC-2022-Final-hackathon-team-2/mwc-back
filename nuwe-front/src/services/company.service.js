import axios from "axios";

export default class CompanyService {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:5000/api/companys",
      withCredentials: true,
    });
  }

  create = (data) => this.instance.post("/", data);
  get = () => this.instance.get("/");
  getOne = (id) => this.instance.get(`/${id}`);
}