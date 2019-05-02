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
const domain = process.env.REACT_APP_API_DOMIN_DEV;
var apiary = {
  domain: domain,
  repo: domain + process.env.REACT_APP_API_ALLGITHUBREPO,
};

export { colors, apiary };
