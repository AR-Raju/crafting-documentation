import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <div className="hidden lg:flex">
        <Link aria-label="Home" href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={24}
            className="h-6 w-auto"
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
