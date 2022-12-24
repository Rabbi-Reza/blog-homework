import Link from "next/link";

const Header = () => {
  return (
    <header className="blog_header">
      <Link href="/">
        <span>Blog Site</span>
      </Link>
    </header>
  );
};

export default Header;
