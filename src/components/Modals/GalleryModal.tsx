import { getAllPhotos } from "@api/photos/photos.client";
import { GalleryCard } from "@components/Photos/GalleryCard";
import { DefaultModal } from "@components/shared/DefaultModal";
import { Dialog } from "@headlessui/react";
import { useQuery } from "react-query";

export const GalleryModal = () => {
  const { data } = useQuery("photos", getAllPhotos);

  return (
    <DefaultModal>
      <Dialog.Title
        as="h3"
        className="text-left text-3xl font-bold leading-6 text-gray-900"
      >
        Gallery
      </Dialog.Title>
      {data && <GalleryCard data={data.data} />}
    </DefaultModal>
  );
};
