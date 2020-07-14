import React,{Component} from 'react';
import { Card, CardBody,
    Table,Jumbotron,Button } from 'reactstrap';
   import { Link } from 'react-router-dom';

function RenderviewItem ({detail}) {

    return (
        <Card>
            
               <CardBody> 
               
                     <Table striped bordered hover>
             
             <tbody>
                <tr>
                 
                 <td>{detail.name}</td>
                 <td>{detail.email}</td>
                 <td>{detail.phone}</td>
                <td>{detail.credit}</td>
                <td><Link to={`/transaction/${detail.id}`}  ><Button >transfer credit  </Button></Link> </td>
                 </tr>
              </tbody>     
  
            </Table>
                </CardBody> 
                 
                
           
        </Card>
    );
}




   
   
   
    const PersonDetail=(props) =>{
  
            return (
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
                     <div  >
                        <Card>
                                <CardBody> 
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                               
                                                <th> Name</th>
                                                <th>email</th>
                                                <th>phone number</th>
                                                <th>credit</th>
                                                <th>visit</th>
                                            </tr>
                                        </thead>
                                    </Table>
                                 </CardBody> 
                            </Card>
                    </div>
               
                    <div    key={props.detail.id}>
                        <RenderviewItem detail={props.detail}  />
                    </div>
                    </React.Fragment>  
                 
           
            );
        
    



            return(
               
                {PersonDetail}
        
       
           
           
           
        );


        }

export default PersonDetail;