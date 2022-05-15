import Button from "app/atoms/button/Button";
import Container from "app/templates/container/Container";
import Logo from "app/atoms/logo/Logo";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import style from "./navigation.module.css";
import Link from "next/link";
import { listItems } from "data/navigation";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { useRouter } from "next/router";
import { motion, useViewportScroll } from "framer-motion";
export default function Navigation(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { scrollY } = useViewportScroll();
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    scrollY.onChange((x) => setScrollPos(x));
    return () => scrollY.destroy();
  }, [scrollY]);
  return (
    <motion.nav
      className={`${style.nav}`}
      variants={{
        start: {
          backgroundColor: "rgba(255,255,255,0)",
        },
        end: {
          backgroundColor: "rgba(255,255,255,.5)",
        },
      }}
      animate={scrollPos > 20 ? "end" : "start"}
    >
      <Container>
        <div className={`${style.wrapper}`}>
          <Logo />
          <div className={`${style.bar} ${isOpen && style.active}`}>
            <Container className="flex items-center flex-wrap lg:flex-nowrap">
              <ul className={`${style.list}`}>
                {listItems.map(({ name, path }) => (
                  <li
                    onClick={(e) => {
                      setIsOpen(false);
                    }}
                    className={`${style.item}`}
                    key={name}
                  >
                    <a className={`${style.link}`} href={path}>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
              {/* <div className={`${style.button}`}>
                <Button
                  tag="button"
                  className=""
                  onClick={() => {
                    router.push("/CV.pdf");
                  }}
                >
                  download cv
                </Button>
              </div> */}
            </Container>
            <div className="lg:hidden">
              <div className="flex justify-center mb-4">
                <a
                  className="text-gray-700 hover:text-black mr-6"
                  href="https://github.com/trust96"
                >
                  <FaGithub size={26} />
                </a>
                <a
                  className="text-gray-700 hover:text-black"
                  href="linkedin.com/in/trust-oriabure-54ba431b5"
                >
                  <FaLinkedin size={26} />
                </a>
              </div>

              <div className="text-center bg-black text-white flex items-center justify-center">
                <span>All rights reserved to trust</span>
              </div>
            </div>
          </div>
          <button
            className={`${style.container}`}
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}
          >
            <div className={`${style.menu}`}>
              <div
                className={`${style.menu_item_one} ${isOpen && style.top}`}
              ></div>
              <div
                className={`${style.menu_item_two} ${isOpen && style.center}`}
              ></div>
              <div
                className={`${style.menu_item_three} ${isOpen && style.bottom}`}
              ></div>
            </div>
          </button>
        </div>
      </Container>
    </motion.nav>
  );
}
