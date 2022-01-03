import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import { useCallback } from "react";
// import { useDropzone } from "react-dropzone";
import { Center, useColorModeValue, Icon } from "@chakra-ui/react";
import { AiFillFileAdd } from "react-icons/ai";

// import { useStyles } from "./styles.js";

const DropZone = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
    multiple: false,
  });

  const dropText = isDragActive
    ? "Drop the files here..."
    : "Drag and drop files here, or click to select files...";

  const activeBg = useColorModeValue("gray.100", "gray.600");
  const borderColor = useColorModeValue(
    isDragActive ? "teal.300" : "gray.300",
    isDragActive ? "teal.500" : "gray.500"
  );

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} name="image" accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Point thumbnail" />
      ) : (
        <Center
          py={230}
          cursor="pointer"
          bg={isDragActive ? activeBg : "transparent"}
          _hover={{ bg: activeBg }}
          transition="background-color 0.2s ease"
          borderRadius={4}
          border="3px dashed"
          borderColor={borderColor}
        >
          <p>{dropText}</p>
        </Center>
      )}
    </div>
  );
};

export default DropZone;
