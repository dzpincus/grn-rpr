import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ForumHeader() {
  const { user } = useUser();

  return (
    <>
      <div className="bg-base-200 drop-shadow-lg flex w-full justify-between items-center px-6">
        <Link href="/">
          <h1 className="cur sor-pointer text-lg md:text-2xl font-serif tracking-widest font-medium py-6">
            T<span className="italic">he </span>G
            <span className="italic">rin </span>R
            <span className="italic">eaper</span>
            <br />
          </h1>
        </Link>
        {user ? (
          <>
            <div className="dropdown dropdown-hover dropdown-end">
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
                className="dropdown-content top-16 menu-compact text-right px-4 py-3 shadow bg-base-100 rounded-box w-fit"
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
