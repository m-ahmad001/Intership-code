import React, { useState } from 'react'
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';




export default function Navbar() {

  const StyleToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center'

  })
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 20px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
  }))


  const IconBox = styled("div")(({ theme }) => ({

    padding: '0 20px',
  }))

  const [open, setOpen] = useState(false);
  return (

    <>
      <AppBar position="sticky" color="primary">
        <StyleToolbar>
          <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }} >
            Ahmad Dev
          </Typography>
          <AdbIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
          <Search><InputBase placeholder="Search"></InputBase> </Search>
          <IconBox><Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge></IconBox>
          <Avatar onClick={e=> setOpen(true)} alt="Remy Sharp" src="https://cdn.dribbble.com/users/323571/screenshots/5412611/batman_4x.jpg" />
        </StyleToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"

          open={open}
          onClose={e=>setOpen(false)}

          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem >Profile</MenuItem>
          <MenuItem >My account</MenuItem>
          <MenuItem >Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  )
}
