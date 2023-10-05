import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href={"/"}>home</Link>
      <Link href={"/settings"}>settings</Link>
    </nav>
  );
}

export default Navbar;
