import {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from "react-router-dom"
import {IJwt} from "../../types/auth.types";
import {ToastContainer} from "react-toastify";

const pages = ['Products', 'Pricing', 'Blog'];
const userRoutes = [
  {title: "Dashboard", url: "dashboard"},
  {title: "Profile", url: "profile"},
  {title: "Logout", url: "logout"},
]

interface IHeaderComponentProps {
  user?: IJwt
}

const HeaderComponent = ({user}: IHeaderComponentProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const redirect = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => redirect("/")}
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              cursor: "pointer"
            }}
          >
            MinimalGram
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
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
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MinimalGram
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>

          </Box>
          <Box sx={{flexGrow: 0, display: "flex"}}>
            {
              !user && (
                <>
                  <Button variant="contained" sx={{mx: 1, my: 2, color: 'white'}} onClick={() => redirect("login")}>
                    log in
                  </Button>
                  <Button variant="contained" sx={{mx: 1, my: 2, color: 'white'}} onClick={() => redirect("signup")}>
                    sign up
                  </Button>
                </>
              )
            }
            {
              user && (<>
                  <Typography
                    variant="h6"
                    noWrap
                    component="h5"
                    sx={{
                      mr: 2,
                      display: {xs: 'none', md: 'flex'},
                      fontFamily: 'monospace',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    {user.name}
                  </Typography>
                  <Tooltip title="User settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{mt: '45px'}}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {userRoutes.map((route) => (
                      <MenuItem key={route.url} onClick={() => {
                        redirect(route.url);
                        setAnchorElUser(null);
                      }}>
                        <Typography textAlign="center">{route.title}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )
            }
          </Box>
        </Toolbar>
      </Container>
      <ToastContainer/>
    </AppBar>
  );
}

export default HeaderComponent;


