import useAxios from "../util/axiosCall";


// TODO: unify how backend return data, like:
// res:{status. error, data: {msg, timestamp, ...everythingElse}}

// export const languagePost = () => {
//   const url = 'http://backend.borjamediavilla.com/api/v1/serp/localLang';
//   return useAxios(data => ({
//     url,
//     method: "POST",
//     data
//   })); // returns [res, <function to enter req>]
// }

// export const loginPost = () => {
//   const url = 'http://backend.borjamediavilla.com/api/v1/auth/login';
//   return useAxios(data => ({
//     url,
//     method: "POST",
//     data,
//     crossdomain: true
//   }));
// }

export const singupPost = () => {
  const [axiosRes, setRes] = React.useState('')
  const [res, setReq ]= useAxios();

  React.useEffect(() => {
    if (axiosRes!==res){
      setRes(axiosRes)
    }
  },[axiosRes]
  )
  return [res, ]
}

// export const SERPPost = () => {
//   const url = 'http://backend.borjamediavilla.com/api/v1/serp/serp';
//   return useAxios(data => ({
//     url,
//     method: "POST",
//     data,
//     crossdomain: true
//   }));
// }

// export const RankPost = () => {
//   const url = 'http://backend.borjamediavilla.com/api/v1/serp/ranked';
//   return useAxios(data => ({
//     url,
//     method: "POST",
//     data,
//     crossdomain: true
//   }));
// }

// // TODO: Search/Autocomplete IPGet + languagePost

// // TODO: Rank/FacebookCell FacebookGet

// // TODO: Rank/PDACell PDAPost

// export const PDFPost = () => {
//   const url = 'https://v2018.api2pdf.com/chrome/html';
//   return useAxios(data => ({
//     url,
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': '222c59ba-af7f-468d-9951-e4671bc5bee1'
//     },
//     body: JSON.stringify({ data, inlinePdf: true, fileName: 'test.pdf' })
//   }));
// }

// export const PlagiarismPost = () => {
//   const url = 'http://backend.borjamediavilla.com/api/v1/serp/verificarTextoAux';
//   return useAxios(data => ({
//     url,
//     method: "POST",
//     data,
//     crossdomain: true,
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }));
// }

//TODO: InfoButtons/SaveArticle ArticlePost