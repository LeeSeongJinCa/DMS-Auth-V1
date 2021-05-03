import useBool from "./useBoolean";

const useModal = () => {
  const [modal, openModal, closeModal] = useBool();

  return [modal, openModal, closeModal] as const;
};

export default useModal;
