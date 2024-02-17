import React from "react";
import { FormTitle } from "./Title.styled";

interface ITitle {
  children: React.ReactNode;
}

const Title = ({children}: ITitle) => {

  return (
    <div>
      <FormTitle>{children}</FormTitle>
    </div>
  )
};

export default Title;