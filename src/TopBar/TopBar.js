import "./TopBar.css";
import "./BottomBarMobile.css";

export default function TopBar() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <div className="Nav">
        <a href="index.html" id="Logo">
          Logo
        </a>
        <div id="NavMiddle">
          <button id="NavBlog">
            Blog
          </button>
          <button id="Home">
            Home
          </button>
          <button id="NavProjects">
            Projects
          </button>
        </div>
        <a href="socials.html" id="Socials">
          Socials
        </a>
      </div>
    </div>
  );
}
