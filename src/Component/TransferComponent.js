import React,{Component} from 'react';
import { Card, CardBody,
    Jumbotron,Button, CardTitle,input } from 'reactstrap';
import { Link } from 'react-router-dom';
import CardHeader from 'reactstrap/lib/CardHeader';
class Transfer extends Component{
    


    render(){
      



        

        return(
            <>
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
            
                    <div className="container">
                    <div className="row">
                    <Card>
                        <CardHeader>
                          <CardTitle>
                           Transfer Credit
                           </CardTitle>     
                         </CardHeader>   
                    <CardBody>
                    <dl className="row ">
                                        <dt className="col-6 offset-sm-2">From :</dt>
                                        <dd className="col-4"><input/></dd>
                                        <dt className="col-6 offset-sm-2">Transfer to :</dt>
                                        <dd className="col-4"><input/></dd>
                                        <dt className="col-6 offset-sm-2">Amount :</dt>
                                        <dd className="col-4"><input/></dd>
                        </dl>
                        <Link to='/view' ><div class="col-12 offset-sm-6"> <Button  variant="primary">Transfer</Button></div></Link>
                     </CardBody>   
                    
                    </Card>
        
                    </div>
                    </div>
            
            

           

        

         </>   
        );
    }


}
export default Transfer;