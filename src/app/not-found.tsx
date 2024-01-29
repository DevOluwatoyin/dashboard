import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center flex-col px-4 space-y-4 lg:px-0">
        <h2 className="font-extrabold text-lg lg:text-2xl">
          Dear customer, this page does not exist.
        </h2>
        <Link
          href="/dashboard"
          className="underline text-primary hover:text-black"
        >
          Click here to go back to dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
