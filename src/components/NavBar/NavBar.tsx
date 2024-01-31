import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./NavBar.module.css";
import classNames from "classnames";
import { Routes } from "../../router/router";

const NavBar: React.FC = () => {
  const [isOpenBurger, setOpenBurger] = useState<boolean>(false);

  const scrollToSection = (el: HTMLElement) => {
    window.scrollTo({
      behavior: "auto",
      top: el.getBoundingClientRect().top + window.pageYOffset + -70,
    });
  };

  const handleOpenBurger = () => {
    setOpenBurger(!isOpenBurger);
  };

  return (
    <div className={styles.navBar}>
      <div className={classNames("container", styles.navBarContent)}>
        <a href={Routes.MAIN}>
          <span>АЛЕКСАНДР ЩЁЛОКОВ</span>
        </a>
        <nav>
          <ul className={styles.navBarLinks}>
            <li>
              <HashLink scroll={(el) => scrollToSection(el)} to={"#about"}>
                Обо мне
              </HashLink>
            </li>
            <li>
              <HashLink scroll={(el) => scrollToSection(el)} to={"#portfolio"}>
                Портфолио
              </HashLink>
            </li>

            <li>
              <HashLink scroll={(el) => scrollToSection(el)} to={"#footer"}>
                Контакты
              </HashLink>
            </li>
          </ul>
        </nav>
        <div className={styles.burgerMenu} onClick={() => handleOpenBurger()}>
          <div
            className={classNames(
              styles.burgerIcon,
              isOpenBurger ? styles.active : ""
            )}
          ></div>
        </div>
        <ul
          className={classNames(
            styles.navBarLinksMobile,
            isOpenBurger ? styles.active : ""
          )}
        >
          <li>
            <HashLink
              scroll={(el) => scrollToSection(el)}
              to={"#about"}
              onClick={() => handleOpenBurger()}
            >
              Обо мне
            </HashLink>
          </li>
          <li>
            <HashLink
              scroll={(el) => scrollToSection(el)}
              to={"#portfolio"}
              onClick={() => handleOpenBurger()}
            >
              Портфолио
            </HashLink>
          </li>

          <li>
            <HashLink
              scroll={(el) => scrollToSection(el)}
              to={"#footer"}
              onClick={() => handleOpenBurger()}
            >
              Контакты
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
