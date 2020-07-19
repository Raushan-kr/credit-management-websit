import React from 'react';
import {Jumbotron, Button} from 'reactstrap';






function RenderComments({comments})
{
  
  if(comments!=null)

    return(
      <div>
      <h4>Transfer</h4>
      <ul className="list-unstyled">

      {comments.map((comment)=>{
        return(
          <li key={comment._id}>
                <p>transfer from name: </p>
              <p>{comment.fromname}</p>
              <p>transfer to name: </p>
              <p>{comment.toname}</p>

              <p>{comment.amount}</p> 
              
          </li>

        );
      }

    
      )}
      
      </ul>
    </div>
    );
  else
    return(
        <div></div>
    );

}



const  Transfer = (props) => {

  return(
    <React.Fragment>
    <Jumbotron fluid>
    <h1>Hello, world!</h1>
    <p>
         This is a simple hero unit, a simple jumbotron-style component for calling
         extra attention to featured content or information.
    </p>
    <p>
        <Button variant="light">Learn more</Button>
    </p> 
</Jumbotron> 
      <div ClassName="container">
        <div className="row">
          
        </div>
        <div className="row">
          <div  className="col-12 col-md-5 m-1">
           
          </div>
          <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.transfer}/>
     
          </div>
        </div>
    </div>
</React.Fragment>
);
}


export default Transfer;
