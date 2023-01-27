import { useModalContext } from "@context/ModalContext/ModalContext";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface Props {
  children: React.ReactNode;
}

export const DefaultModal = ({ children }: Props) => {
  const modalCtx = useModalContext();

  return (
    <>
      <Transition appear show={modalCtx.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => modalCtx.closeModal("3")}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-full h-[80vh] mx-20 transform overflow-y-auto rounded-2xl bg-zinc-300 p-10 text-left  shadow-xl transition-all relative">
                  {children}

                  <button
                    className="absolute top-0 right-0 bg-red-500 text-white px-3 py-2 rounded-bl-xl"
                    onClick={() => modalCtx.closeModal("3")}
                  >
                    Close
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
