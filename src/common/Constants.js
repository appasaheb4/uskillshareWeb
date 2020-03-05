
//Rest Full Api  
const domain = process.env.REACT_APP_API_DOMIN_DEV;
const apiary = {
  domain: domain,
  registration: domain + process.env.REACT_APP_API_REGISTRATION,
  loginUser: domain + process.env.REACT_APP_API_LOGINUSER,
  getAllLang: domain + process.env.REACT_APP_API_GETALLLANG,
  postNotes: domain + process.env.REACT_APP_API_POSTNOTES,
  getPostNotes: domain + process.env.REACT_APP_API_GETPOSTNOTES,
};

export { apiary };
