function theBeatlesPlay(musicians, instruments){
  let newString=[];
  for(let i=0; i<musicians.length;i++){
    let string= `${musicians[i] +  instruments[i]}`;
    newString.push(string)
  };
  return newString;
}
// add solution here
