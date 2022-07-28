import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
