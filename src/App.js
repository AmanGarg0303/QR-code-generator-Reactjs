import "./App.css";
import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateQRcode = async () => {
    try {
      const res = await QRCode.toDataURL(text);
      setImageUrl(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      generateQRcode();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          padding: "2rem",
          // width: "80vw",
          textAlign: "center",
          backgroundColor: "lightgray",
        }}
      >
        QR Code Generator
      </h1>

      <div
        style={{
          display: "grid",
          grid: "100vw/auto",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        {/* QR CODE GENERATOR  */}
        <div>
          <input
            type="text"
            placeholder="Enter http address"
            autoFocus
            onChange={(e) => setText(e.target.value)}
            style={{
              border: "none",
              borderBottom: "2px solid",
              padding: "5px",
              fontSize: "17px",
              marginRight: "20px",
            }}
            id="qrcodegen"
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={() => generateQRcode()}
            style={{ padding: "5px", fontSize: "18px", marginTop: "20px" }}
          >
            Generate
          </button>
          <br />
          <br />
          {imageUrl ? (
            <a href={imageUrl} download>
              <img src={imageUrl} alt="img" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
