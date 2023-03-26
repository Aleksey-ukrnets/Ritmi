import React, {  useEffect, useRef, useState } from "react";
import { posts } from "./Info";
import Post from "./Post";
import css from "../../styles/faq.module.scss";
import icon from "../../assets/char_blue.png";

export default function FaqBlock({getOffsetHeight}) {

  let ref = useRef(null)

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
 
  useEffect(() => {
    getOffsetHeight(ref.current.offsetTop);
    // eslint-disable-next-line
  }, [ref]);

  return (
    <div className={css.faq} ref={ref}>
      <div className={css.wrapper}>
        <div className={css.list}>
          <div className={css.postsContainer}>
            <div className={css.titleBlock}>F.A.Q</div>
            {posts.map((post, index) => {
              return (
                <Post
                  post={post}
                  key={index}
                  clicked={clicked}
                  toggle={toggle}
                  index={index}
                  css={css}
                />
              );
            })}
            {/* <div className={css.btn}>See more</div> */}
          </div>
          <img src={icon} alt="icon" />
        </div>
      </div>
    </div>
  );
}
