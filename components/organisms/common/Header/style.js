import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    marginRight: '2rem',
  },
});

// // import styled from 'styled-components';
// import { AppBar as MuAppBar } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';

// export const LogoContainer = styled.div`
//   flex: 1;
// `;

// export const AppBar = styled(MuAppBar)`
//   && {
//     ${({ haselevation }) => !haselevation && `box-shadow: none;`}
//   }

//   a {
//     text-decoration: none;
//     &:hover {
//       text-decoration: none;
//     }
//   }
// `;

// export const UserButton = styled(Button)`
//   && {
//     border-radius: 25px;
//     padding-left: 5px;
//     padding-right: 10px;
//     background-color: ${({theme}) => theme && theme.red[400]}
//   }
// `;

// export const UserAvatar = styled(Avatar)`
// && {
//   padding: 0;
//   margin-right: 10px;
// }
// `;
