import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center">
          <a
            href="https://calendly.com/dubemjesseco/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-50 hover:text-white transition-colors duration-300 text-sm md:text-base"
          >
            📅 Schedule a Call with Me
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg) => (
            <a key={socialImg.url} className="icon" target="_blank" href={socialImg.url}>
              <img
                src={socialImg.imgPath}
                alt="social icon"
                className={socialImg.name === "x" ? "invert" : ""}
              />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Jesse Odoh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;