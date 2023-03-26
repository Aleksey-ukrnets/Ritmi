import React from "react";

export default function Post({ toggle, index, post, css, clicked }) {
  return (
    <div className={css.post}>
      <div className={css.rowWrapper} onClick={() => toggle(index)}>
        <div className={css.question}>{post.question}</div>
      </div>
      {clicked === index && (
        <div className={css.answer}>
          <div className={css.empty}></div>
          <div
            dangerouslySetInnerHTML={{ __html: post.answer }}
            className={css.answerText}
          />
        </div>
      )}
    </div>
  );
}
