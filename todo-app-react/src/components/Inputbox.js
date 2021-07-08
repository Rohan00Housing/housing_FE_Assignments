function Inputbox({setTodo,addTodo}){
  const styleInput = {
    position: 'relative',
    left: '20%',
    width: '60%'
  }
  return(
    <div className="input-box" style={styleInput}>
      <input style={{width: '80%'}} placeholder="Enter Task"
        onChange= {(ev)=>{setTodo(ev.target.value)}}
      >
      </input>
      <button style={{width: '15%'}} onClick={()=>{addTodo()}}>+</button>
    </div>
  );
}

export default Inputbox;