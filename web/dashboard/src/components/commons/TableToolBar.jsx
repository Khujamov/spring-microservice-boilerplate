import React from 'react';
import ReactPropTypes from 'prop-types';
import { PropTypes } from 'mobx-react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import {
  Fab, IconButton, Toolbar, TextField,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

// static
import TableToolBarStyle from '../../styles/jss/components/commons/TableToolBarStyle';

const TableToolBar = ({ ...props }) => {
  const { classes } = props;
  return (
    <Toolbar className={classes.toolBar}>
      <Fab size="small" color="primary" aria-label="Add" className={classes.margin}>
        <Add />
      </Fab>
    </Toolbar>
  );
};

TableToolBar.propTypes = {
  classes: ReactPropTypes.shape().isRequired,
};

export default withStyles(TableToolBarStyle)(TableToolBar);