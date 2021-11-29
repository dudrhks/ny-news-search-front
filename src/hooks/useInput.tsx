import React, { useState, useCallback } from "react";

const useInput = (initValue: any) => {
  const [value, setValue] = useState(initValue);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return { value, onChange, setValue };
};

export default useInput;
