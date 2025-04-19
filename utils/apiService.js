export const apiRequest = async ({
  endpoint,
  method = "GET",
  body = null,
  token = null,
  headers = {},
}) => {
  const baseUrl = "https://api.escuelajs.co/api/v1";
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      //   ...(token && { Authorization: `Bearer ${token}` }),
      //   ...headers,
    },
    ...(body && { body: JSON.stringify(body) }),
  };
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, config);

    // if (!response.ok) throw new Error(`Error: ${response.status}`);

    // Handle no-content responses (204) or plain "true"/"false"
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return true; // e.g., plain text response like "true"
    }
  } catch (err) {
    console.error("API Request Error:", err);
    throw err;
  }
};
