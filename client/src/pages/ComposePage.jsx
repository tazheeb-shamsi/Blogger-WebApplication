import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ComposePage = () => {
  const [value, setValue] = useState("");

  return (
    <div className="compose_post">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editor_container">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="items">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="chooseFile"
          />
          <label htmlFor="chooseFile">Upload Image</label>

          <div className="buttons">
            <button>Save as a draft</button>
            <button>Publish</button>
          </div>
        </div>
        <div className="items">
          <h1>Category</h1>
          <input type="radio" name="category" value="ART" id="ART" />
          <label htmlFor="ART">ART</label>
          <input type="radio" name="category" value="SCIENCE" id="SCIENCE" />
          <label htmlFor="SCIENCE">SCIENCE</label>
          <input
            type="radio"
            name="category"
            value="TECHNOLOGY"
            id="TECHNOLOGY"
          />
          <label htmlFor="TECHNOLOGY">TECHNOLOGY</label>
          <input type="radio" name="category" value="CINEMA" id="CINEMA" />
          <label htmlFor="CINEMA">CINEMA</label>
          <input type="radio" name="category" value="DESIGN" id="DESIGN" />
          <label htmlFor="DESIGN">DESIGN</label>
          <input
            type="radio"
            name="category"
            value="HEALTH & DIET"
            id="HEALTH & DIET"
          />
          <label htmlFor="HEALTH & DIET">HEALTH & DIET</label>
        </div>
      </div>
    </div>
  );
};

export default ComposePage;
