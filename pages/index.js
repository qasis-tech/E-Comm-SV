import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/register"}>Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
