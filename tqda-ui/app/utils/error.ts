"use client"
// ! DONT USE 
export const getErrorMessage = (res: any) => {
  if (res && res.message) {
    if (Array.isArray(res.message)) {
      return formatErrorMsg(res.message[0]);
    }
    return formatErrorMsg(res.message);
  }
  return "Error occurred, please try again!";
};


const formatErrorMsg = (msg: string) => {
  return msg.charAt(0).toUpperCase() + msg.slice(1);
};
