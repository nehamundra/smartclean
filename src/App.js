import React, { Component, Fragment } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import { getAllData_Async, getAllData } from './actions'
import Home from './Home/home';
import Login from './Login/login';
import {withRouter} from 'react-router-dom'
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
class App extends Component {

  componentDidMount = () => {
    // this.props.dispatch(getAllData_Async());
    sessionStorage.removeItem("user");
  }

  handleLogout=()=>{
    sessionStorage.removeItem("user");
    // this.props.history.push('/login');
    window.location.reload();
  }
  render() {
    console.log(this.props)
    let btn=sessionStorage.getItem("user")?
            <Button label="Logout" className="p-button-secondary" onClick={this.handleLogout} />:
            null
    
    return (
      
      <Fragment>
        <div>
          <nav>
            <a>SMART-CLEAN</a>
            <span style={{float:"right"}}>
              {btn}
            </span>
          </nav>
        </div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" render={()=><Home {...this.props}/>} />
          <Route path="/" exact component={Home}/>
        </Switch>
      </Fragment>
    );
  }
}
function mapStateToProps({ data }) {
  return {
    data,
  }
}
export default connect(mapStateToProps)(withRouter(App));
