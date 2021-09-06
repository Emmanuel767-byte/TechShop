import React from 'react';
import {Menu,MenuItem,Button} from "@material-ui/core";
import Fade from '@material-ui/core/Fade';

function MenuTab() {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div>
             <Button className="menu"  aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Products
      </Button>
      <Menu TransitionComponent={Fade}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Speakers</MenuItem>
        <MenuItem onClick={handleClose}>Amps</MenuItem>
        <MenuItem onClick={handleClose}>Aux Cors & Adapters</MenuItem>
        
      </Menu>
        </div>
    )
}

export default MenuTab
