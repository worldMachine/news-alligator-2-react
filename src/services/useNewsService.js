import axios from "axios";
import config from "./config";

const getArticles = async (latestDate) => {
  console.log("latestDate is: ", latestDate);

  // let page = pageNum.toString();
  // return axios.get("https://jsonplaceholder.typicode.com/albums/1/photos");
  // let response = await axios.get("/api/news/all");
  let response = await axios.get(
    // http://newsalligator2-env.eba-8gtrbuez.us-west-1.elasticbeanstalk.com
    config.API_ENDPOINT + "api/news/beforeDate",
    {
      params: { date: latestDate },
    }
  );
  console.log("article response: ", response);
  return response;
};

// const getNextAr = async () => {
//   let response = await axios.get("/api/news/recent");
//   console.log("article response: ", response);
//   return response;
// };

// axios.get('/user', {
//   params: {
//     ID: 12345
//   }
// }).then...

export default {
  getArticles,
};
