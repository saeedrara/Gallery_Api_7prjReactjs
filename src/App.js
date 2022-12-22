import { useState } from "react";

function App() {

  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  console.log(result)
  const fetchImage = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=apleBtBD0TeBbUZP5T-_USCMoHFbycwk1g_ERfCDq0E&query=${value}`)
    .then(res => res.json())
    .then(data => {
      setResult(data.results)
    })
  }

  return (
    <div>
        <div className="header">
          <span>جستجو</span>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={fetchImage}>ارسال</button>
        </div>
        <div className="gallery">
          {
            result && result.map((item) => 
            <img key={item.id} src={item.urls.regular} alt="" />
            )
          }
        </div>
    </div>
  );
}

export default App;
