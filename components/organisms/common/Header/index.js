/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import NoSsr from '@material-ui/core/NoSsr';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Toolbar, IconButton, MenuItem, Menu, Button, Chip, Box, AppBar } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Image from 'next/image';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './style';
import { clearAuthInfo } from '../../../../helper/auth';
// import Image from '../../../atoms/Image';
// import { setAuthCookie, getFileUrl, redirectToRoute, getCookieAccepted } from '../../../../helpers';
// import { LogoContainer, AppBar, UserButton, UserAvatar } from './style';

const Logo = '/images/logo.png';

const Header = ({ sidebar, onClick, hasElevation }) => {
  const classes = useStyles();
  const router = useRouter();
  const [auth, setAuth] = useState(false);

  const { user } = useSelector((state) => state.auth);


  useEffect(() => {
    if (user && user.id && !auth) {
      setAuth(true);
    }
  }, [user]);

  // const [showCookieAlert, setShowCookieAlert] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirectToArticles = () => {
    // redirectToRoute({}, 'update_profile');
    router.push('/articles')
  };


  const redirectToNewArticle = () => {
    router.push("/articles/new")
  }

  const signOutHandler = () => {
    // setAuthCookie(null);
    clearAuthInfo();
    router.reload();

  };

  return (
    <>
      {/* <NoSsr>{showCookieAlert && <CookieAlert closePopup={closePopupHandler} />}</NoSsr> */}
      <AppBar position="fixed" haselevation={hasElevation ? 1 : 0}>
        <Toolbar className={classes.root}>
          <Box>
            <Link href="/articles" color="inherit" title="home page">
              <div>
                <Image bottom="0.3125rem" width="60px" height="60px" src={Logo} alt="Rabie Blog" />
              </div>
            </Link>
          </Box>
          <Box>
            {auth ? (
              <div>
                <Button
                  variant="text"
                  color="inherit"
                  onClick={redirectToNewArticle}
                  startIcon={<AddIcon />}
                >
                  Add Article
                </Button>

                <Button
                  variant="text"
                  color="inherit"
                  onClick={handleMenu}
                  endIcon={<ExpandMoreIcon />}
                >
                  {`${user.firstName} ${user.lastName}`}
                </Button>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={redirectToArticles}>Articles</MenuItem>
                  <MenuItem onClick={signOutHandler}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <>
                <Link href="/login" color="inherit">
                  <Button color="inherit">Login</Button>
                </Link>

                <Link href="/register" color="inherit">
                  <Button color="inherit">Register</Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

Header.propTypes = {
  sidebar: PropTypes.bool,
  onClick: PropTypes.func,
  hasElevation: PropTypes.bool,
};

Header.defaultProps = {
  sidebar: false,
  hasElevation: true,
  onClick: () => {},
};

export default Header;
