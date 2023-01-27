import { getAllComments } from "@api/comments/comments.client";
import { NewsCard } from "@components/Comments/NewsCard";
import { DefaultModal } from "@components/shared/DefaultModal";
import { Dialog } from "@headlessui/react";
import { useQuery } from "react-query";

export const NewsModal = () => {
  const { data } = useQuery("comments", getAllComments);

  return (
    <DefaultModal>
      <Dialog.Title
        as="h3"
        className="text-left text-3xl font-bold leading-6 text-gray-900"
      >
        News
      </Dialog.Title>
      {data && <NewsCard data={data.data} />}
    </DefaultModal>
  );
};
