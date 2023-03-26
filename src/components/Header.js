import React, { useCallback } from "react";
import css from "../styles/header.module.scss";
import logo from "../assets/logo.svg";
import twitterIcon from "../assets/twitter.svg";
import discordIcon from "../assets/discord.svg";
import CommonBtn from "../ui/CommonBtn";

export default function Header({ allScrollHeight, openInNewTab }) {
  const links = [
    { title: "about", link: allScrollHeight?.about },
    { title: "play", link: allScrollHeight?.play },
    { title: "f.a.q", link: allScrollHeight?.faq },
  ];
  const onScroll = useCallback((to) => {
    console.log(to);
    window.scrollTo({
      top: to,
      behavior: "smooth",
    });
  }, []);

  return (
    <header>
      <div className={css.header}>
        <img className={css.logo} src={logo} alt="logo" />
        <div className={css.linkList}>
          {links.map((el, index) => (
            <div
              key={index}
              className={css.link}
              onClick={() => onScroll(el.link)}
            >
              {el.title}
            </div>
          ))}
        </div>
        <div className={css.socials}>
          <a
            href="https://twitter.com/Ritmi_App"
            rel="noreferrer"
            target={"_blank"}
          >
            <img src={twitterIcon} alt="twitterIcon" />
          </a>
          <a
            href="https://discord.gg/S9T4hUAGmE"
            rel="noreferrer"
            target={"_blank"}
          >
            <img src={discordIcon} alt="discordIcon" />
          </a>
        </div>
        <div className={css.btn}>
          <CommonBtn
            text={"join Beta"}
            className={css.btnHeader}
            handler={() => openInNewTab("https://discord.gg/S9T4hUAGmE")}
          />
        </div>
      </div>
    </header>
  );
}
