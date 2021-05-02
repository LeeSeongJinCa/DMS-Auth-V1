import { ChangeEvent, useCallback, useState } from "react";

export type InputElements = HTMLInputElement & HTMLTextAreaElement;

export type OnChangeEvent = ChangeEvent<InputElements>;

const useInput = () => {
  const [input, setInput] = useState<string>("");

  const onChangeInput = useCallback((e: OnChangeEvent) => {
    setInput(e.currentTarget.value);
  }, []);

  return [input, onChangeInput, setInput] as const;
};

export default useInput;
