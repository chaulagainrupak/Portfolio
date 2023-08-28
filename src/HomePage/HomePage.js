
import "./HomePage.css";
import "./HomePageMobile.css";
export default function HomePage() {
  return (
    <div>
      <head><meta name="viewport" content="width=device-width, initial-scale=1"/></head>
      <div className="Hero">
        <div id="HeroContainer">
            <div id="HeroIntro">
            <div id="ThisIs">Hello This is</div>
            <div id="HeroName">Rupak Chaulagain</div>
            </div>
          <div id="HeroImageContainer">
            {/* <img src="/Images/Background.jpg" alt="Background"></img> */}
          </div>
        </div>
      </div>

      <div className="HeroBlog">
          THis is a thing
          
      </div>
    </div>
  );
}


