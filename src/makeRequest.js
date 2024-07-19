import axios from "axios";

export default async function makeRequest({ url, payload, method, token }) {
  try {
    const request = axios.create({
      baseURL: "http://localhost:3000",
      timeout: 20000,
      cancelToken: axios.CancelToken.source().token,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    switch (method) {
      case "POST":
        return await request.post(url, payload).then((r) => r.data);
      case "GET":
        return await request.get(url, { params: payload }).then((r) => r.data);
      default:
        return;
    }
  } catch (error) {
    return requestErrorHandler({ url, payload, method }, error);
  }
}

async function requestErrorHandler({ method, url, payload }, error) {
  console.log(error.message);
}
