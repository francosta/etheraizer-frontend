export const login = (loginEmail, loginPassword) => {
  const baseURL = "http://localhost:3000";
  const loginURL = baseURL + "/login";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: loginEmail,
      password: loginPassword
    })
  };
  return fetch(loginURL, options).then(resp => resp.json());
};

export const validate = () => {
  return fetch("http://localhost:3000/validate", {
    headers: { Authorisation: localStorage.token }
  }).then(resp => {
    return resp.json();
  });
};

export const getUserData = () => {
  return fetch("http://localhost:3000/user_data", {
    headers: { Authorisation: localStorage.token }
  }).then(resp => {
    resp.json();
  });
};

export default { login, validate, getUserData };
