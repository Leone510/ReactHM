export const generateId = () => {
   const data = new Date();
   const id = `${data.getFullYear()}${data.getMonth()}${data.getDay()}${data.getHours()}${data.getMinutes()}${data.getSeconds()}`
   return Number(id);
}