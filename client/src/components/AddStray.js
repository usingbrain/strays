import React, { useState } from 'react';
import './AddStray.css';

function AddStray({ addStrayToDB }) {
  const [name, setName] = useState('');
  const [sex, setSex] = useState();
  const [colour, setColour] = useState();
  const [file, setFile] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [previewSource, setPreviewSource] = useState('');
  const [img_url, setImgUrl] = useState('');

  // file input functions from a tutorial by https://github.com/jamesqquick/cloudinary-react-and-node/
  function handleSubmit(e) {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    addStrayToDB({ name, sex, colour, img_url, spot_id: 8 });
    setName('');
    setSex();
    setColour();
    setImgUrl('');
  }

  function handleFileInput(e) {
    const fileObject = e.target.files[0];
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
        response.json().then((imgUrl) => {
          console.log(imgUrl);
          setImgUrl(imgUrl);
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
    <div className="add">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-evenly p-2.5"
      >
        <input
          className="p-1.5"
          required
          type="text"
          placeholder="Name your stray!"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <p>selecting a sex is optional</p>

        <div>
          <input
            type="radio"
            id="fe"
            name="sex"
            value="female"
            onChange={(event) => setSex(event.target.value)}
          />
          <label htmlFor="fe">female</label>
        </div>

        <div>
          <input
            type="radio"
            id="male"
            name="sex"
            value="male"
            onChange={(event) => setSex(event.target.value)}
          />
          <label htmlFor="male">male</label>
        </div>

        <input
          className="p-1.5"
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
        <button className="create rounded p-2.5 w-3/5" type="submit">
          Create stray profile
        </button>
      </form>
    </div>
  );
}

export default AddStray;
