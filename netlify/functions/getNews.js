import axios from "axios";

exports.handler = async function (event, context) {
  const params = event.queryStringParameters;
  const category = params.category || "general";
  const key = params.key;

  if (!key) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing API key" }),
    };
  }

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`
    );

    return {
      statusCode: 200,
       headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news" }),
    };
  }
};
