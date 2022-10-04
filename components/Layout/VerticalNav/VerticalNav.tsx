import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./VerticalNav.module.css";
import LocaleSwitcher from "../Language/language-switcher";
import { useTranslation } from "next-i18next";



let isMobile: boolean;
const VerticalNav = ({
  isMenuOpen,
  setMenuOpen,
}: {
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  
  useEffect(() => {
    isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile && isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);
  const { t } = useTranslation();
  return (
    <div className={`${styles.container} ${isMenuOpen ? styles.open : ""}`}>
      <div className=" flex flex-col gap-y-4">
        <StyledLink setMenuOpen={setMenuOpen} href="/">
        {t("menu.Home")}
        </StyledLink>
        <a
          href="https://app.smartfunds.xyz/#/funds/0x2347254d5e6ee2505466452910379cb72ce5dc89"
          target="_blank"
          rel="noreferrer"
          className="text-2xl w-fit"
        >
          {t("menu.Dashboard")}
        </a>
        <StyledLink setMenuOpen={setMenuOpen} href="/posts">
        {t("menu.Updates")}
        </StyledLink>
        <StyledLink setMenuOpen={setMenuOpen} href="/portfolio">
        {t("menu.Portfolio")}
        </StyledLink>
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default VerticalNav;

const StyledLink = ({
  children,
  href,
  setMenuOpen,
}: {
  children: string;
  href: any;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        onClick={() => {
          if (!isMobile) return;
          setMenuOpen(false);
        }}
        className={`${
          (children === "home" &&
            (router.pathname === "/" || !router.pathname)) ||
          router.pathname.includes(children)
            ? "verticalNavActive"
            : ""
        } verticalNavLink text-2xl w-fit`}
      >
        {children}
        <span />
      </a>
    </Link>
  );
};
