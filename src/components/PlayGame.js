import React from "react";
import css from "../styles/playgame.module.scss";
import CommonBtn from "../ui/CommonBtn";
import topImg from "../assets/topImg.png";
import pers from "../assets/persGirl.png";
import bg from "../assets/bg.svg";
import List from "../ui/List";
import { useWindowWidth } from "@react-hook/window-size";

export default function PlayGame() {
  const onlyWidth = useWindowWidth()
  return (
    <div
      className={css.playContainer}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="progressBar_container">
        <div className="progressBar">
          <div className="progress">
            progress bar 2000 members &nbsp;<span> simple & vip</span>
          </div>
        </div>
      </div>
      <div className={css.block}>
        <div className={css.info}>
          <div className={css.title}>DANCE & PLAY</div>
          <div className={css.desc}>
            <p className={css.first}>Change your perception of dancing!</p>
            <p className={css.second}>
              Sign up for the early version to take part in Dance Challenges and
              win prizes!
            </p>
          </div>
          <CommonBtn text={"join challenge"} className={onlyWidth > 1441 && "large"} />
        </div>
        <div className={css.icon}>
          <img src={topImg} alt="topImg" />
        </div>
      </div>
      <div className={css.experience}>
        <div className={css.left}>
          <img src={pers} alt="girlIcon" />
        </div>
        <div className={css.right}>
          <div className={css.titleExp}>It’s an amazing experience!</div>
          <div className={css.descExp}>
            Our game is a dancing machine in your smartphone!
          </div>
          <List
            list={[
              "Create your avatar, upgrade & customize it.",
              "Collect Dance Cards for your Dancer.",
              "Attend PVP or Coop Dance Battles",
            ]}
            list2={[
               " Join or build a Dance CLubs with your friends online & offline.",
                "Share your Dance Videos on social media.",
                "Design personal track levels."
            ]}
            gap={onlyWidth > 700 && 50}
          />
        </div>
      </div>
     
    </div>
  );
}
// "Take the phone in your hand",
// "Сhoose your favorite track",
// "Keep looking at your phone",
