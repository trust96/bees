import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer>
      <div className="py-6 px-4 bg-secondary md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-300 sm:text-center">
          © 2022{" "}
          <Link href="/">
            <a>Trust</a>
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <a
            className="text-gray-300 hover:text-white"
            href="https://github.com/trust96"
          >
            <FaGithub size={26} />
          </a>
          <a
            className="text-gray-300 hover:text-white"
            href="linkedin.com/in/trust-oriabure-54ba431b5"
          >
            <FaLinkedin size={26} />
          </a>
        </div>
      </div>
    </footer>
  );
}
