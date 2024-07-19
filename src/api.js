import makeRequest from "./makeRequest";

export async function getRole({ email }) {
  return await makeRequest({
    method: "GET",
    url: "/isAdmin",
    payload: { email },
  });
}

export async function login({ email, password }) {
  return await makeRequest({
    method: "POST",
    url: "/login",
    payload: { email, password },
  });
}

export async function getBooks({}) {
  return await makeRequest({
    method: "GET",
    url: "/books",
    payload: {},
  });
}

export async function getTransactions({}) {
  return await makeRequest({
    method: "GET",
    url: "/transactions",
    payload: {},
  });
}

export async function getUserTransactions({ token }) {
  return await makeRequest({
    method: "GET",
    url: "/transactions/user-transactions",
    payload: {},
    token,
  });
}

export async function getUser({ token }) {
  return await makeRequest({
    method: "GET",
    url: "/users/me",
    payload: {},
    token,
  });
}
