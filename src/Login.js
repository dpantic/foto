import React from 'react';
import Avatar from './Avatar';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import {Link} from 'react-router-dom';
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
    open: false,
  }


  closeDrawer = () => {
    this.setState({open: false})
  } 

   openDrawer = () => {
    this.setState({open: true})
   // console.log('drawer opens')
   }

  login = (e) => {
    console.log('login1');
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render(){
     const { classes } = this.props;
    return(
      <div className={classes.root}>

      <Drawer open={this.state.open} onRequestClose={this.closeDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.closeDrawer}
            onKeyDown={this.closeDrawer}
          >
           DRAWER
          </div>
      </Drawer>

      <AppBar position="static">


        <Toolbar>

          <IconButton onClick={this.openDrawer} className={classes.menuButton} color="contrast" aria-label="Menu">

           <MenuIcon/>
     
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Foto
          </Typography>

<Avatar />
          <Button onClick={this.login} color="contrast">Login</Button>

          <Link to="/">
            <Button color="contrast">Home</Button>
          </Link>
          
          <Link to="/about">
            <Button color="contrast">About</Button>
          </Link>

           <Link to="/images">
            <Button color="contrast">Images</Button>
          </Link>

          <Link to="/contact">
            <Button color="contrast">Contact</Button>
          </Link>

         

        </Toolbar>
      </AppBar>
    </div>
    )
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);