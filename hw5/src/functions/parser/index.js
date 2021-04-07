export const parseTimer = (num) => {
   let sec = num%60;
   let min = ~~(num/60)%60;
   let hour = ~~(~~(num/60)/60)%60;

   sec < 10 && (sec = '0'+ sec)
   min < 10 && (min = '0'+ min)
   hour < 10 && (hour = '0'+ hour)

   return `${hour}:${min}:${sec}`;
} 