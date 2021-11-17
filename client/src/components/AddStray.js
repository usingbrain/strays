import React, { useState } from 'react';

function AddStray({ addStrayToDB }) {
  const [name, setName] = useState('');
  const [sex, setSex] = useState();
  const [colour, setColour] = useState();
  const [file, setFile] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [previewSource, setPreviewSource] = useState('');

  // file input functions from a tutorial by https://github.com/jamesqquick/cloudinary-react-and-node/
  function handleSubmit(e) {
    e.preventDefault();
    const reader = new FileReader();
    console.log(selectedFile);
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      console.log('upload data: ', reader.result);
      uploadImage(reader.result);
    };
    addStrayToDB({ name, sex, colour });
    setName('');
    setSex();
    setColour();
  }

  function handleFileInput(e) {
    const fileObject = e.target.files[0];
    console.log(fileObject);
    previewFile(fileObject);
    setSelectedFile(fileObject);
    setFile(e.target.value);
  }

  function previewFile(file) {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  }
  const uploadImage = async (base64EncodedImage) => {
    const url = 'http://localhost:8080';
    try {
      await fetch(url + '/api/upload', {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        console.log(response);
        response.json().then((imgUrl) => {
          console.log(imgUrl);
        });
      });
      setFile('');
      setPreviewSource('');
      console.log('Image uploaded successfully');
    } catch (err) {
      console.error('Something went wrong: ', err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Name your stray!"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <p>selecting a sex is optional</p>

        <input
          type="radio"
          id="fe"
          name="sex"
          value="female"
          onChange={(event) => setSex(event.target.value)}
        />
        <label htmlFor="fe">female</label>

        <input
          type="radio"
          id="male"
          name="sex"
          value="male"
          onChange={(event) => setSex(event.target.value)}
        />
        <label htmlFor="male">male</label>

        <input
          list="colours"
          id="colourList"
          name="colourList"
          onChange={(event) => setColour(event.target.value)}
          placeholder="choose a color"
        />
        <datalist id="colours">
          <option value="white" />
          <option value="black" />
          <option value="red" />
          <option value="tricolor" />
        </datalist>
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInput}
          value={file}
        />
        {previewSource && (
          <img src={previewSource} alt="chosen" style={{ height: '150px' }} />
        )}
        <button type="submit">Create stray profile</button>
      </form>
    </div>
  );
}

export default AddStray;
