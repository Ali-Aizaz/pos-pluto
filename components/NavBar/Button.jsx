import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

const Button = ({ hover, title, href, children }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <div
        className={`py-3 px-4 rounded-xl flex items-center space-x-10  ${
          router.asPath === href ? "bg-purple" : "hover:bg-light-black"
        }`}
      >
        {children}
        <h1
          className={`text-2xl font-medium ${
            hover ? "w-[100px]" : "w-0 hidden"
          }`}
        >
          {title}
        </h1>
      </div>
    </Link>
  );
};

export default memo(Button);
