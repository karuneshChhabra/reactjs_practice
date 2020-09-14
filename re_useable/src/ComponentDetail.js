import React from 'react';


const ComponentDetail =(props)=>{
 return (

    <div className="ui comment">

        <a className="avatar">     
          <img alt="avatar" src={props.image}/>
        </a>
        <div className="content">
            <a className="author">{props.author}</a>
            <div className="metadata">
                <span className="date">{props.time}</span>
            </div>
            <div className="text">
                {props.text}
            </div>
        </div>    

               

    </div>


 );



}

 export default ComponentDetail;