import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "./tooltip";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary h-36 w-full flex place-content-center items-center gap-5">
        <Tooltip message="https://www.facebook.com/Sasha.et.al">
          <a
            href="https://www.facebook.com/Sasha.et.al"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} color="white" size="2x" />
          </a>
        </Tooltip>
        <Tooltip message="https://www.instagram.com/grnrpr/">
          <a
            href="https://www.instagram.com/grnrpr/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
          </a>
        </Tooltip>
        <Tooltip message="thegrinreaper16@gmail.com">
          <a href="mailto:thegrinreaper16@gmail.com">
            <span className="fa-layers fa-2x">
              <FontAwesomeIcon icon={faCircle} color="white" />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-primary"
                transform="shrink-6"
              />
            </span>
          </a>
        </Tooltip>
        <Tooltip message="(631)-275-8218">
          <a href="tel:6312758218">
            <span className="fa-layers fa-2x">
              <FontAwesomeIcon icon={faCircle} color="white" />
              <FontAwesomeIcon
                icon={faPhone}
                className="text-primary"
                transform="shrink-6"
              />
            </span>
          </a>
        </Tooltip>
      </footer>
    </>
  );
}
