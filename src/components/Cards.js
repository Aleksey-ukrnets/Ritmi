import React from "react";
import twit from "../assets/twit.svg";
import ds from "../assets/dsCard.svg";
import tiktok from "../assets/tiktokCard.svg";

import css from "../styles/cards.module.scss";
import CommonBtn from "../ui/CommonBtn";
export default function Cards({openInNewTab}) {
 
  const cards = [
    {
      text: "Discord",
      desc: "Connect with like-minded most active & trendy people",
      img: ds,
      btnText: "join",
      handler: () => openInNewTab('https://discord.gg/S9T4hUAGmE'),
    },
    {
      text: "twitter ",
      desc: "Keep up with the latest news",
      img: twit,
      btnText: "SUBSCRIBE ",
      handler: () => openInNewTab('https://twitter.com/Ritmi_App'),
    },
    {
      text: "tiktok ",
      desc: "Become a trendsetter and participate in Ritmi Challenges",
      img: tiktok,
      btnText: "SUBSCRIBE ",
      handler: () => openInNewTab('https://www.tiktok.com/@ritmi_app'),
    },
  ];
  return (
    <div className={css.cardBlock}>
      <div className={css.cardList}>
        {cards.map((el, index) => (
          <div key={index} className={css.card}>
            <div className={css.header}>
              <div className={css.text}>{el.text}</div>
              <img src={el.img} alt="icon" />
            </div>
            <div className={css.desc}>{el.desc}</div>
            <CommonBtn className={css.btnCard} text={el.btnText} handler={el.handler} />
          </div>
        ))}
      </div>
    </div>
  );
}
