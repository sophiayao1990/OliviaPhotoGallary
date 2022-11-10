import PhotoGallary from "./components/PhotoGallary";

import "./App.css";

function App() {
  const gallaryImages = [
    {
      img: "images/1.jpg",
    },
    {
      img: "images/2.jpg",
    },
    {
      img: "images/3.jpg",
    },
    {
      img: "images/4.jpg",
    },
    {
      img: "images/5.jpg",
    },
    {
      img: "images/6.jpg",
    },
    {
      img: "images/7.jpg",
    },
    {
      img: "images/8.jpg",
    },
    {
      img: "images/9.jpg",
    },
    {
      img: "images/10.jpg",
    },
    {
      img: "images/11.jpg",
    },
    {
      img: "images/12.jpg",
    },
  ];

  return (
    <div className="App">
      <h1>Olivia's Photo Gallary</h1>
      <PhotoGallary gallaryImages={gallaryImages} />
    </div>
  );
}

export default App;
