/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ImageIcon from '@material-ui/icons/Image';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useImageUploaderStyles } from './style';

const ImageUploader = ({ onChange,error,value, maxFileSize }) => {
  const fileInputRef = useRef(null);
  const ImageUploaderStyles = useImageUploaderStyles();
  const [imagePreviewUrl, setImagePreviewUrl] = useState(value);
  const [errors, setErrors] = useState('');

  const open = () => {
    fileInputRef.current.click();
  };

  const readFiles = (fileItems) => {
    const readFile = () => {
      const reader = new FileReader();
      const file = fileItems[0];
      reader.onload = (ev) => {
        // get file content
        const bin = ev.target.result;

        // Validate file and store preview for the only validated files.
        if (ev.total < maxFileSize * 1024 * 1024) {
          setImagePreviewUrl(bin);
          setErrors(null);
          onChange(bin);
        } else {
          setErrors(`Sorry, maximum size exceeded ${maxFileSize} MB`);
          onChange(null);

        }
      };

      if (file instanceof File || file instanceof Blob) {
        reader.readAsDataURL(file);
      }
    };

    readFile();
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const fileItems = Array.from(e.target.files);

    // Read and preview the files
    readFiles(fileItems);
  };

  return (
    <div>
      {imagePreviewUrl && <img className={ImageUploaderStyles.preview} src={imagePreviewUrl} />}
      {errors && <Alert severity="error">{error || errors}</Alert>}
      <Button startIcon={<ImageIcon />} onClick={open} color="primary">
        {imagePreviewUrl ? 'Replace Image' : 'Upload Image'}
      </Button>
      <input
        hidden
        ref={fileInputRef}
        type="file"
        onChange={handleImageChange}
        accept="image/png, image/jpeg, image/jpg"
      />
    </div>
  );
};

ImageUploader.propTypes = {
  maxFileSize: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.any,
  value: PropTypes.string
};

ImageUploader.defaultProps = {
  maxFileSize: 4,
  error: null,
  value:undefined
};

export default ImageUploader;
