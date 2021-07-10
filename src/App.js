import './App.css';
import Card from "./Card"

const data = [
  {
    img: "https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg",
    title: "Smithsonian Magazine",
    subtitle: "Listening to Nature Gives You a Real Rocky Mountain High | Science | Smithsonian"
  },
  {
    img: "https://lh3.googleusercontent.com/OZH0FbQ4Wt41H98631Rrm4hohhoLAESwFAuuRuuJcRQ-h9u_bcTOLDbRCG4WFbLOiqu8Rn9ABjE3u1NHzmI0NzhCZw=w640-h400-e365-rj-sc0x00ffffff",
    title: "Nature Landscapes",
    subtitle: "Nature Landscapes (New Tab Wallpapers)"
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg",
    title: "University of Washington",
    subtitle: "What counts as nature? It all depends | UW News"
  }
];

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <Card
              img={data[0].img}
              title={data[0].title}
              subtitle={data[0].subtitle} />
          </div>
          <div className="col-md-4">
            <Card
              img={data[1].img}
              title={data[1].title}
              subtitle={data[1].subtitle} />
          </div>
          <div className="col-md-4">
            <Card
              img={data[2].img}
              title={data[2].title}
              subtitle={data[2].subtitle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
