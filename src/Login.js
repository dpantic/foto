import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
const firebase = window.firebase;


const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class Login extends React.Component{


  state = {
    login: false,
  }
  
  login = (e) => {
    //console.log('login1');
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(this.setState({login: true}));
     
  }
  
  logout = (e) => {
    firebase.auth().signOut().then(this.setState({login: false}));
  }



  render(){
     const { classes } = this.props;
    return(
      <div className={classes.root}>  
          <Button onClick={this.state.login ? this.logout : this.login} color="contrast">{
            this.state.login ? 'logout' : 'login'
          }</Button>

    </div>
    )
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);