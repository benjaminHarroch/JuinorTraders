

import React from 'react'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BuildIcon from '@mui/icons-material/Build';
import axios from 'axios';

export const Poper = ({postid}) => {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
  
    const handleClick = (newPlacement) => (event) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

    //console.log(postid);

    function deleteItem(){

        //delete post from post array in the user array
        axios.delete(`https://juniortraders.onrender.com/auth/deletepostfromuser/${postid}`)
        .then((res)=>{

              console.log(res)

              //delete post from post db
            axios.delete(`https://juniortraders.onrender.com/post/deletepost/${postid}`)
            .then((response)=>console.log(response))
            .catch((e)=>console.log(e));

        })
        .catch((e)=>console.log(e));

    }


  return (


    <div>


    <Box sx={{ width: 500 }}>

      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>

            <Button onClick={()=>deleteItem()}><DeleteIcon/></Button>
            <Button><EditIcon/></Button>
            
            </Paper>
          </Fade>
        )}
      </Popper>
     
          <Button onClick={handleClick('left-start')}><BuildIcon/></Button>
      
    </Box>

    </div>
  )
}
