import React,{Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Detail} from '../shared/detail';
import  Header from './HeaderComponent';
import HomePage from './Homecomponent';
import Contact from  './ContactusComponent';
import Footer from './FooterComponent';
import View from './viewComponent';
import PersonDetail from './personDetailComponent';
import Transaction from './TransferComponent'
class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            detail:Detail
        };
        
    }
    render()
    { 
        const DetailwithId = ({match}) => {
            return(
                <PersonDetail detail={this.state.detail.filter((detail) => detail.id === parseInt(match.params.detailId,10))[0]}
                  />
            );
          };
          const person = ({match}) => {
            return(
                <Transaction detail={this.state.detail.filter((detail) => detail.id === parseInt(match.params.detailId,10))[0]}
                  />
            );
          };
          return(

            <div>
                <Header />
                <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/view' component={()=><View detail={this.state.detail}/>} />
                <Route  path='/view/:detailId' component={DetailwithId}/>
                <Route path='/transaction/' component={person}/>
                <Route exact path='/contactus' component={Contact}/>} />
                 
                <Redirect to="/home" />
            </Switch>  
               <Footer/>
            </div>
          );
    
    
        }
}
export default Main;