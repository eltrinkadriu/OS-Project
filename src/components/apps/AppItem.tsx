import { Icon, IconProps } from "@components/shared/Icon/Icon";
import { useModalContext } from "@context/ModalContext/ModalContext";

interface AppItemProps extends IconProps {
  id: string;
  modalContent: JSX.Element | null;
}

export const AppItem = ({ id, icon, title, modalContent }: AppItemProps) => {
  const modalCtx = useModalContext();

  return (
    <div className="mt-10 ml-10">
      <button
        className=" border-30 border-red-50 rounded-full  bg-red-50"
        onDoubleClick={() => modalCtx.openModal(id)}
      >
        <Icon icon={icon} className="w-8 h-8 " />
      </button>

      <p className="text-center mt-3 font-medium">{title}</p>
      {modalContent != null && modalCtx.id === id && <div>{modalContent}</div>}
    </div>
  );
};
