import React, { useContext } from "react";
import { ContextValue } from "hocs/ContextProvaider";

const Errors = () => {
  const { error } = useContext(ContextValue);
  return <div className="error">Возникла ошибка:{error}</div>;
};

export { Errors };
