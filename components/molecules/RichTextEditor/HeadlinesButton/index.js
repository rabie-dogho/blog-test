/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import HeadlinesPicker from '../HeadlinesPicker';
import { useHBStyles } from './style';

const HeadlinesButton = ({ onOverrideContent }) => {
  const styles = useHBStyles();

  // When using a click event inside overridden content, mouse down
  // events needs to be prevented so the focus stays in the editor
  // and the toolbar remains visible  onMouseDown = (event) => event.preventDefault()
  const onMouseDown = (event) => event.preventDefault();

  const onClick = () =>
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    onOverrideContent(HeadlinesPicker);

  return (
    <div className={styles.HeadlineButtonWrapper} onMouseDown={onMouseDown}>
      <div className={styles.HeadlineButton} onClick={onClick}>
        H
      </div>
    </div>
  );
};

HeadlinesButton.propTypes = {
  onOverrideContent: PropTypes.func.isRequired,
};

export default HeadlinesButton;
