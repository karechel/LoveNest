import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import '../global.css';


const pages = ['Home', 'About Us', 'Services', 'Vendors', 'Features', 'Contact Us'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar position="static"
    sx={{
      backgroundColor:'#FFFFFF',
      color:'#000000',
      boxShadow:'none',
      paddingLeft:'30px',
      paddingRight:'36px',
    }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>          
             
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img
            src="/images/logo2.jpg"
            alt="Love Nest"
            style={{ width: '150px', height: 'auto' }} // Adjust width as needed
          />
          </Typography>
            
          <Box sx={{ flexGrow: 3, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center',  fontFamily: 'Balthazar', fontWeight:'700'}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }}
          >
           <img
            src="/images/logo2.jpg"
            alt="Love Nest"
            style={{ width: '200px', height: 'auto'}} 
          />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', display:'flex', justifyContent:'center' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000000', display: 'block',fontFamily: 'Balthazar', fontWeight:'700', padding: '6px 36px',  }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button variant="Sign-up"
          sx={{
            background:'#bdb4ad',
            fontFamily: 'Balthazar',
            fontWeight:'700',
            color:'#ffffff'
          }}>Sign Up</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
