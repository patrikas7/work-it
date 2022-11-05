import React from 'react';

interface ButtonProps {
  disabled?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  styling?: string;
  children?: React.ReactNode;
  target?: string;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return props.href ? (
    <Link href={props.href} onClick={props.onClick} styling={props.styling} disabled={props.disabled}>
      {props.children}
    </Link>
  ) : (
    <button disabled={props.disabled} onClick={props.onClick} className={props.styling}>
      {props.children}
    </button>
  );
};

const Link: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <a href={props.href} onClick={props.onClick} className={props.styling}>
      {props.children}
    </a>
  );
};

export default Button;
