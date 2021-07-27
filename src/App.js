import React from 'react'

class  app extends React.Component{

   state = {
      todo : [
        {id:1, task:"eat",done:false},
        {id:2, task :"sleep", done:false}
      ],
      newtask:""
    }

  
    handleadd =()=>{
        this.setState({
          todo:[
            ...this.state.todo,{
              id: Math.random(),
              task: this.state.newtask,
              done: false
            }

          ],
          newtask:""
        })
      }
     handleDone =(i)=>{
       this.setState({
         todo: this.state.todo.map((el)=>
         el.id===i? {...el,done: !el.done} : el)
         
       })
     }
    
  handleDelete =(i)=>{
    this.setState({
     todo: this.state.todo.filter((el) => el.id !==i)
    })
  }
  render () {
    return(
      <div>
        <h1>To Do List</h1>
        <input value={this.state.newtask}
        onChange={(e) => this.setState({newtask: e.target.value})}
        type="text"></input>
        <button onClick={()=> this.handleadd()}>add</button>
       {this.state.todo.map(el=> 
        <li key={el.id}>
        <span  style={ {textDecoration: el.done=== true ?  'line-through' :  null } }  >{el.task}</span>
       <button onClick={()=> this.handleDone(el.id)} >done</button>
        <button onClick={()=> this.handleDelete(el.id)}>delete</button> 
        </li>
        
        )}
      </div>

    )
  }}

export default app

