// import dotenv from "dotenv";
// const result = dotenv.config();
//
// if (result.error) {
//   throw result.error;
// }

//Colors
var colors = {
  appColor: "#FFFFFF",
  social_Github: "#3E4447",
  social_Youtube: "#FF0000",
  social_Whatsup: "#4BED69",
  social_Facebook: "#3C5B98",
  social_Messager: "#3A8FF7",
  social_Instagram: "#DE5A4E",
  social_Twitter: "#4AA0EB"
};

//Rest Full Api
const domain = "https://api.github.com/";
var apiary = {
  domain: domain,
  repo: domain + "users/appasaheb4/repos?per_page=1000"
};

export { colors, apiary };
