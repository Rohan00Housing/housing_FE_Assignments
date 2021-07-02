function evaluateExpression(expression){
  return eval(expression);
}

function findNextClosingBracket(exp,start){
  for(let i=start;i<exp.length;i++){
    if(exp[i]===')') return i;
  }
  return exp.length;
}

function findPreviousOperator(exp,cur_ind){
  while(cur_ind>=0){
    if(exp[cur_ind]<'0' || exp[cur_ind]>'9'){
      return cur_ind;
    }
    cur_ind = cur_ind - 1;
  }
  return -1;
}

function findNextOperator(exp,cur_ind){
  while(cur_ind < exp.length){
    if(exp[cur_ind]<'0' || exp[cur_ind]>'9'){
      return cur_ind;
    }
    cur_ind = cur_ind + 1;
  }
  return exp.length;
}

function filterExpression(exp){
  newExp = "";
  for(let i=0;i<exp.length;i++){
    if(exp[i]==='x' || exp[i]==='X'){
      newExp = newExp + '*';
    }
    else if(exp[i]==='l'){
      let start = i+3;
      let end = findNextClosingBracket(exp,start);
      newExp = newExp + Math.log10(parseFloat(exp.substring(start+1,end)));
      i = end;
    }
    else if(exp[i]==='s' && exp[i+2]==='r'){
      let start = i+4;
      let end = findNextClosingBracket(exp,start);
      newExp = newExp + Math.sqrt(parseFloat(exp.substring(start+1,end)));
      i = end;
    }
    else if(exp[i]==='s'){
      let start = i+2;
      let end = findNextClosingBracket(exp,start);
      newExp = newExp + Math.pow(parseFloat(exp.substring(start+1,end)),2);
      i = end;
    }
    else if(exp[i]==='^'){
      let prev = findPreviousOperator(exp,i-1);
      let next = findNextOperator(exp,i+1);
      let a = parseInt(exp.substring(prev+1,i));
      let b = parseInt(exp.substring(i+1,next));
      newExp = exp.substring(0,prev+1) + Math.pow(a,b);
      // console.log(a + " " + b);
      i=next-1;
      console.log(a + " " + b + " "+newExp);
    }
    else if(exp[i]==='%'){
      newExp = newExp + "/100";
    }
    else{
      newExp = newExp + exp[i];
    }
  }
  return newExp;
}

function calculateResult(){
  let text = document.getElementById('display').value;
  text = filterExpression(text);
  let res = "";
  try{
    res = evaluateExpression(text);
  }
  catch (e){
    res = "invalid syntax!"
  }
  document.getElementById('display').value = res;
}

function clearScreen(){
  document.getElementById('display').value = "";
}

