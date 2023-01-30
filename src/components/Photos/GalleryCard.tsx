import { Photo } from "@api/photos/photos";

interface Props {
  data: Photo[];
}

export const GalleryCard = ({ data }: Props) => {
  return (
    <div className="mt-10 flex flex-row flex-wrap justify-center">
      {data.map((photo) => (
        <div
          className="w-72 mr-5 mb-5 flex flex-col bg-zinc-300 border border-white rounded-md p-5 shadow-md"
          key={photo.id}
        >
          <img src={photo.thumbnailUrl} width={150} height={150} />
          <p className="mt-5 text-xl font-normal">{photo.title}</p>
        </div>
      ))}
    </div>
  );
};
