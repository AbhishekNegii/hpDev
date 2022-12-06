import React from 'react'

const Comment = (props) => {
    console.log(props)
  return (
    <div>
    
        {props.comment.map((item)=>{
            return <ul className='card'>
                id: {item.id}
                <br/>
                Email: {item.email}
                <br/>
                Name : {item.name}
                <br/>
                Body: {item.body}
            </ul>
        })}
      
    </div>
  )
}

export default Comment
