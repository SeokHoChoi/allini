import axios, { AxiosInstance, AxiosResponse } from "axios";

interface RequestOptions {
  url: string;
  method: string;
  headers: Record<string, string>;
  data?: any;
}

export default class HttpClient {
  private httpClient: AxiosInstance;

  constructor(baseURL: string) {
    this.httpClient = axios.create({
      baseURL,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  private async makeRequest(config: RequestOptions): Promise<AxiosResponse> {
    try {
      return await this.httpClient(config);
    } catch (error) {
      // 에러처리 추가필요
      throw new Error("요청 도중 에러가 발생했습니다");
    }
  }

  private async request(params: Record<string, any>) {
    const { method = "GET", url, headers = {}, body } = params;
    const config: RequestOptions = {
      url,
      method,
      headers,
      data: body,
    };

    return this.makeRequest(config);
  }

  async get(url: string, headers = {}) {
    const response = await this.request({
      url,
      headers,
      method: "GET",
    });

    return response.data;
  }

  async post(url: string, body: any, headers = {}) {
    const response = await this.request({
      url,
      headers,
      method: "POST",
      body,
    });

    return response.data;
  }

  async put(url: string, body: any, headers = {}) {
    const response = await this.request({
      url,
      headers,
      method: "PUT",
      body,
    });

    return response.data;
  }

  async patch(url: string, body: any, headers = {}) {
    const response = await this.request({
      url,
      headers,
      method: "PATCH",
      body,
    });

    return response.data;
  }

  async deleteRequest(url: string, headers = {}) {
    const response = await this.request({
      url,
      headers,
      method: "DELETE",
    });

    return response.data;
  }
}
