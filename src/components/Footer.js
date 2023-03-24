import React from "react";
import css from "../styles/footer.module.scss";
import CommonBtn from "../ui/CommonBtn";

import twitIcon from "../assets/twitter.svg";
import tikTokIcon from "../assets/tiktok.svg";
import discordIcon from "../assets/discord.svg";
import youtubeIcon from "../assets/youtube.svg";
import instIcon from "../assets/inst.svg";
import behanceIcon from "../assets/behance.svg";

export default function Footer() {
  const imgs = [
    {img: twitIcon, link: 'https://twitter.com/Ritmi_App' },
    {img: tikTokIcon, link: 'https://www.tiktok.com/@ritmi_app' },
    {img: discordIcon, link: 'https://discord.gg/S9T4hUAGmE' },
    {img: youtubeIcon, link: 'https://www.youtube.com/channel/UCyLbo-yarVmGKNu2vk8jLSA?sub_confirmation=1' },
    {img: instIcon, link: 'https://www.instagram.com/ritmi_app/' },
    {img: behanceIcon, link: 'https://medium.com/@Ritmi_App' },
  ];

  return (
    <footer className={css.footer}>
      <div className={css.wrapper}>
        <div className={css.form}>
          <div className={css.formTitle}>stay tuned</div>
          <div className={css.formDesc}>
            Sign up for the email newsletters so you don't miss anything
          </div>
          <div className={css.formContainer}>
            <input placeholder="E-mail" type="text" />
            <CommonBtn text={"sign up"} className={css.btnForm} />
          </div>
        </div>
        <div className={css.socials}>
          <div className={css.socialTitle}>join our community </div>
          <div className={css.iconList}>
            {imgs.map((el, i) => (
              <a className={css.icon} key={i} href={el.link} rel='noreferrer' target={'_blank'}>
                <img src={el.img} alt="icon" />
              </a>
            ))}
          </div>
        </div>
        <div className={css.links}>
          <div className={css.titleLink}>LINKS</div>
          <div className={css.list}>
            <div className={css.link}>about</div>
            <div className={css.link}>play</div>
            <div className={css.link}>f.a.q</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
