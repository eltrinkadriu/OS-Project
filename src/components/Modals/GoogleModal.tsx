import { DefaultModal } from "@components/shared/DefaultModal";
import { Dialog } from "@headlessui/react";

export const GoogleModal = () => {
  return (
    <DefaultModal>
      <div className="flex flex-col items-center justify-center h-[65vh]">
        <Dialog.Title
          as="h3"
          className="text-center text-6xl font-bold leading-6 text-gray-900"
        >
          Google
        </Dialog.Title>
        <input
          className="text-xl mt-10 w-1/2 pl-5 h-14 rounded-xl border-2 focus:border-green-500 focus:outline-none"
          type="text"
          name="text"
          autoComplete="off"
        />

        <button className="mt-5 text-lg font-bold border-2 py-3 px-16 bg-blue-200 rounded-lg border-blue-200">
          Search
        </button>
      </div>
    </DefaultModal>
  );
};
