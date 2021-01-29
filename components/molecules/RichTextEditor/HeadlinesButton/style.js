import { makeStyles } from '@material-ui/core/styles';

export const useHBStyles = makeStyles({
  HeadlineButtonWrapper: {
    display: 'inline-block',
  },
  HeadlineButton: {
    background: '#fbfbfb',
    color: '#888',
    fontSize: '18px',
    border: '0',
    paddingTop: '5px',
    verticalAlign: 'bottom',
    height: '34px',
    width: '36px',
  },
  // EditorContainer: {
  //   boxSizing: 'border-box',
  //   border: ' 1px solid #ddd',
  //   cursor: 'text',
  //   padding: '16px',
  //   borderRadius: '2px',
  //   background: '#fefefe',
  // },
});


// import styled from 'styled-components';

// export const HeadlineButtonWrapper = styled.div`
//   display: inline-block;
// `;

// export const HeadlineButton = styled.button`
//  background: #fbfbfb;
//   color: #888;
//   font-size: 18px;
//   border: 0;
//   padding-top: 5px;
//   vertical-align: bottom;
//   height: 34px;
//   width: 36px;
// `;