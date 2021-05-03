import { ChangeEvent, useCallback, useState } from "react";

export type InputElements = HTMLInputElement & HTMLTextAreaElement;

export type OnChangeEvent = ChangeEvent<InputElements>;

const useInput = (defaultValue: string = "") => {
  const [input, setInput] = useState<string>(defaultValue);

  const onChangeInput = useCallback((e: OnChangeEvent) => {
    setInput(e.currentTarget.value);
  }, []);

  return [input, onChangeInput, setInput] as const;
};

export default useInput;
