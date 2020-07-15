import React,{Component} from 'react';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';

import  Header from './HeaderComponent';
import HomePage from './Homecomponent';
import Contact from  './ContactusComponent';
import Footer from './FooterComponent';
import View from './viewComponent';
import PersonDetail from './personDetailComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    detail: state.detail
  }
}

class Main extends Component {

   
    render()
    { 
        const DetailwithId = ({match}) => {
            return(
                <PersonDetail detail={this.props.detail.filter((detail) => detail.id === parseInt(match.params.detailId,10))[0]}
                  />
            );
          };
          
          return(

            <div>
                <Header />
                <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/view' component={()=><View detail={this.props.detail}/>} />
                <Route  path='/view/:detailId' component={DetailwithId}/>
            
                <Route exact path='/contactus' component={Contact}/>} />
                 
                <Redirect to="/home" />
            </Switch>  
               <Footer/>
            </div>
          );
    
    
        }
}
export default withRouter(connect(mapStateToProps)(Main));