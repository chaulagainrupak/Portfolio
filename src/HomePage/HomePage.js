import "./HomePage.css";
import "./HomePageMobile.css";

const ReactingToReact = {
  Thumbnail: 'SomeThumbnail',
  Title: 'Reacting To react!',
  Content: 'I am learning react and js at the same time! pretty neat huh? Lorem ipsum dolor sit amet tempor invidur tempor invidur' ,
  PostDate: Date()
}

function loadblog(){
  return (
    <div>

    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <div className="Hero">
        <div id="HeroContainer">
          <div id="HeroIntro">
            <div id="ThisIs">Hello This is</div>
            <div id="HeroName">Rupak Chaulagain</div>
            <a href="rupakchaulagainexists@gmail.com" id="ContactMe">Contact Me</a>

            <div className="blob">
              <img src="/Images/blob.png" alt="blob" id="blob"></img>
            </div>
          </div>
          <div id="HeroImageContainer">
            <img src="/Images/HeroImg.jpg" alt="Im a Developer" id="HeroImg"></img>
          </div>
        </div>
      </div>

      <div className="HeroBlog">The site is still under construction<br/>Won't be complete in a long time i feel like so.
        <div id="BlogCard">
            <div id="CardItems">          
            {ReactingToReact.Thumbnail}<br/>
            {ReactingToReact.Title}<br/>
            {ReactingToReact.Content}<br/>  
          </div>          
        </div>
      </div>
    </div>
  );
}
