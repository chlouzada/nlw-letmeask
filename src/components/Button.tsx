import { ButtonHTMLAttributes } from "react";

import '../styles/button.scss'

type ButtonParams = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(params: ButtonParams){
  return (
    <button className="button" {...params} />
  )
}