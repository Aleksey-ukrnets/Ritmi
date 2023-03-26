import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import icon from "../assets/M&G.png";
import css from "../styles/challenge.module.scss";
import CommonBtn from "../ui/CommonBtn";
import List from "../ui/List";

export default function Challenge({openInNewTab}) {
  const width = useWindowWidth();
  return (
    <div className={css.challengeContainer}>
      <div className={css.first}>
        <div className={css.title}>JOIN THE RITMI CREW AND GET</div>
        {width <= 650 && (
          <img style={{ width: 267, height: 481 }} src={icon} alt="icon" />
        )}
        <List
          list={[
            "Register to get Welcome Gift Box with a one of a kind branded Ritmi T-shirt",
            "Complete all the Challenges and get a Mystery Box promo code with one of the three unique Ritmi set wear",
            "Invite friends and get special roles in Discord opening the possibility of obtaining additional rewards and extra content",
            "Influence the evolution of the project and communicate with developers",
            "Take a chance to be the first to try a unique game!",
          ]}
          size
        />
        {width <= 450 ? (
          ""
        ) : (
          <CommonBtn className={css.margin} text={"join challenge"} handler={()=> openInNewTab('https://discord.gg/S9T4hUAGmE')} />
        )}
      </div>
      <div className={css.second}>
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
}
