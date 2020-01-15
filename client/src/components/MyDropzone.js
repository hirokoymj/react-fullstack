import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const MyDropzone = () => {
  const [photo, setPhoto] = useState("");
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, []);

  const handleInputChange = e => {
    console.log(e.target);
    setPhoto(e.target.photo.value);
  };

  console.log(getRootProps());
  console.log("====");
  console.log(getInputProps());

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} name="photo" />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      <div>{photo}</div>
    </div>
  );
};

export default MyDropzone;
