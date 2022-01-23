import { ButtonHTMLAttributes } from "react";

import "./Button.scss";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className="button" {...props} />;
};
