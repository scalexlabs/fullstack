export const successMessage = (message, payload, data) => ({
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      payload,
      data,
      message
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": process.env.ACCESS_CONTROL_ALLOW_ORIGIN
    }
  });
  
export const errorMessage = (code, message) => ({
    statusCode: 500,
    body: JSON.stringify({
      status: "error",
      code,
      message
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": process.env.ACCESS_CONTROL_ALLOW_ORIGIN
    }
  });