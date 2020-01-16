import React from "react";
import { useDropzone } from "react-dropzone";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  dropzone: {
    border: "2px dashed lightblue",
    padding: "20px"
  }
}));

export const MyDropzone = () => {
  const classes = useStyles();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => {
    console.log(URL.createObjectURL(file));
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes{" "}
        <img src={URL.createObjectURL(file)} alt="car" />
      </li>
    );
  });

  return (
    <section className="container">
      <div {...getRootProps()} className={classes.dropzone}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
};
