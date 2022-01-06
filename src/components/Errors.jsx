import React, { useContext } from "react";
import { ContextValue } from "hocs/ContextProvaider";

const Errors = () => {
  const { error } = useContext(ContextValue);

  return (
    <div className="error">
      <i>Возникла ошибка</i>
      <p> {`${error}`}</p>
    </div>
  );
};

export { Errors };
