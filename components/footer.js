import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="bg-purple h-36 w-full flex place-content-center items-center gap-5">
        <a href="https://www.facebook.com/Sasha.et.al" target="_blank">
          <FontAwesomeIcon icon={faFacebook} color="white" size="2x" />
        </a>
        <a href="https://www.instagram.com/grnrpr/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
        </a>
      </footer>
    </>
  );
}
