let API_ENDPOINT = "";

if (process.env.NODE_ENV === "development") {
  API_ENDPOINT = "";
}

if (process.env.NODE_ENV === "production") {
  API_ENDPOINT =
    "https://newsalligator2-env.eba-8gtrbuez.us-west-1.elasticbeanstalk.com/";
}

module.exports = {
  API_ENDPOINT,
};
