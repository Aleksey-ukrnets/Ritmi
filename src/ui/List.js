import React from "react";
import particles from "../assets/ulParticles.svg";
import css from "../styles/list.module.scss";
import cn from "classnames";
export default function List({
  list = ["123", "text123"],
  list2 = [],
  column = false,
  size = true,
  gap,
  className
}) {
  return (
    <div className={cn(css.list, column && css.col)} style={{gap: gap}}>
      <div className={cn(css.first, className)}>
        {list &&
          list?.map((el, index) => (
            <div key={index} className={css.textBlock}>
              <img src={particles} alt="icon" />
              <div className={cn(css.text, size  && css.size)}>{el}</div>
            </div>
          ))}
      </div>
      <div className={cn(css.second, className)}>
        {list2 &&
          list2?.map((el, index) => (
            <div key={index} className={css.textBlock}>
              <img src={particles} alt="icon" />
              <div className={cn(css.text, )}>{el}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
