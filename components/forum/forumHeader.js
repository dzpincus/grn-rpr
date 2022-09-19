import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { titleItalics } from "../../utils/text";

export default function ForumHeader() {
  const { user } = useUser();

  return (
    <>
      <div className="sticky top-0 overflow-visible bg-base-200 drop-shadow-lg flex w-full justify-between items-center px-6">
        <Link href="/">
          <h1 className="cursor-pointer text-lg md:text-2xl font-serif tracking-widest font-medium py-6">
            {titleItalics("The Grin Reaper")}
            <br />
          </h1>
        </Link>
        {user ? (
          <>
            <div className="dropdown dropdown-hover dropdown-left">
              <label tabIndex={0} className="m-1 cursor-pointer">
                <img
                  src={user.picture}
                  alt={user.name}
                  height="40px"
                  width="40px"
                  className="rounded-full"
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu-compact text-right px-4 py-3 shadow bg-base-100 rounded-box w-fit top-32"
              >
                <li>
                  <a href="/api/auth/logout">Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <a href="/api/auth/login">
            <button className="btn btn-primary btn-sm md:btn-md">
              <FontAwesomeIcon icon={faUser} className="pr-2" />
              Log In
            </button>
          </a>
        )}
      </div>
    </>
  );
}
