import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});



//const Images = props => {

   class Images extends React.Component {
   	render(){
   		const { classes } = this.props;
   		return(
   	<div>
		<h1>Images Upload</h1>
		 <input accept="jpg,jpeg,JPG,JPEG" className={classes.input} id="file" multiple type="file" />
		 <label htmlFor="file">
		    <Button raised component="span" className={classes.button}>
		      Upload
		    </Button>
		  </label>
	 </div>)
   	}

   }

	

Images.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Images);

 //<IconButton onClick={this.openDrawer} className={classes.menuButton} color="contrast" aria-label="Menu">