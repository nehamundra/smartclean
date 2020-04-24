export const GET_ALL_DATA = 'GET_ALL_DATA'

export const ASYNC_ACTION = 'ASYNC_ACTION'
export const getAllDataAPI = () => new Promise((res) => {
//   const dataList = [{
//     title: "Crisis3",
//     author: "Robin Cook",
//     genre: "Mystery thriller",
//     summary: "The terrifying story of a doctor who is the victim of a medical malpractise crisis",
//     id: 1004
//   }, {
//     title: "Crisis4",
//     author: "Robin Cook",
//     genre: "Mystery thriller",
//     summary: "The terrifying story of a doctor who is the victim of a medical malpractise crisis",
//     id: 1005
//   }];

const dataList=require('../frontend_assignment.json')
  setTimeout(() => {
    res(dataList);
  }, 0);
})


export function getAllData_Async() {
  return (dispatch) => {
    getAllDataAPI()
      .then((data) => {
        dispatch(getAllData(data));
      });
  };
}
export function getAllData(data) {
  return {
    type: GET_ALL_DATA,
    data,
  }
}
