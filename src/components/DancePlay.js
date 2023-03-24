import React, { useState } from "react";
import css from "../styles/danceplay.module.scss";
import List from "../ui/List";
import Gameplay_video from "../assets/Gameplay_video.mp4";
import { useWindowWidth } from "@react-hook/window-size";

export default function DancePlay() {
  const [control, setControl] = useState(false);
  const width = useWindowWidth()
  return (
    <div className={css.danceBlock}>
      <div className={css.wrapper}>
        <div className={css.first}>
          <div className={css.title}>RITMI DANCEPLAY</div>
          <div className={css.block}>
            <List
              list={[
                "Take the phone in your hand",
                "Сhoose your favorite track",
                "Keep looking at your phone",
              ]}
              list2={[
                "Listen to the music",
                "Follow the moves step by step",
                "Do it right and earn your coins and experience",
              ]}
              gap={width <= 450 ? 0 : 30}
              column={width <= 450 && true}
              className={css.padding}
            />
          </div>
        </div>
        <div
          className={css.second}
          onMouseOver={() => setControl(true)}
          onMouseLeave={() => setControl(false)}
        >
          <video controls={control}>
            <source src={Gameplay_video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
