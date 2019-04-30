import React from "react";

interface IProp {
  message: string;
}

const FormValidator: React.SFC<IProp> = props => {
  return <h1>{props.message}</h1>;
};

FormValidator.defaultProps = {
  message: "Reactstrap FormValidator Component"
};

export default FormValidator;
