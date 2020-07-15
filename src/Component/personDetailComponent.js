import React,{Component} from 'react';
import { Card, CardBody,
    Table,Jumbotron,Button ,Collapse,CardHeader,CardTitle,Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
    import { Link } from 'react-router-dom';


class PersonDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            open:false,
            dropdownOpen:false
        }
        this.handleClick = this.handleClick.bind(this);
        this.toggle=this.toggle.bind(this);
    }

    handleClick() {
        this.setState({ open:!this.state.open });
       
      }


      toggle(){
       this.setState({dropdownOpen:!this.state.dropdownOpen});
      }
    renderviewItem(detail) {
   
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
                                        <td>   
                                            <Button  onClick={() => this.handleClick()} >
                                            transfer credit 
                                            </Button>
                                            
                                        </td>
                  
          
    
                            </tr>
                        </tbody>     
                    </Table>

                    
                </CardBody> 
            </Card>
             
        );
    }
    



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
   
       
            {this.renderviewItem(this.props.detail) }
        
            <Collapse isOpen={this.state.open}>
         <div id="container">
          
                
                <Card>
                        <CardHeader>
                          <CardTitle>
                           Transfer Credit
                           </CardTitle>     
                         </CardHeader>   
                    <CardBody>
                    <dl className="row ">
                                        <dt className="col-6 offset-sm-2">From :</dt>
                                        <dd className="col-4">{this.props.detail.name}</dd>
                                        <dt className="col-6 offset-sm-2">Transfer to :</dt>
                                        <dd className="col-4">
                                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                <DropdownToggle caret>
                                                    <input/>
                                                    </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem >gopi</DropdownItem>
                                                    <DropdownItem>Ram</DropdownItem>
                                                    <DropdownItem >Shyam</DropdownItem>
                                                    
                                                    <DropdownItem>Mohan</DropdownItem>
                                                    <DropdownItem>sohan</DropdownItem>
                                                    <DropdownItem>Rakesh</DropdownItem>
                                                    <DropdownItem>suresh</DropdownItem>
                                                </DropdownMenu>
                                             </Dropdown>   
                                                </dd>
                                        <dt className="col-6 offset-sm-2">Amount :</dt>
                                        <dd className="col-4"><input/></dd>
                        </dl>
                        <Link to='/view' ><div class="col-12 offset-sm-6"> <Button  variant="primary">Transfer</Button></div></Link>
                     </CardBody>
                     </Card>
 
           
        </div>
        </Collapse>
        </>

    );
}
}
export default PersonDetail;