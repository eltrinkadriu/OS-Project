import { Comment } from "@api/comments/comments";

interface Props {
  data: Comment[];
}

export const NewsCard = ({ data }: Props) => {
  return (
    <div className="mt-10">
      {data.slice(0, 10).map((news) => (
        <div
          className="mb-5 flex flex-col bg-zinc-300 border border-white rounded-md p-4 shadow-md"
          key={news.id}
        >
          <h3 className="text-xl font-medium">{news.name}</h3>
          <p className="text-sm font-light">{news.email}</p>
          <p className="mt-5 text-base font-light">{news.body}</p>
        </div>
      ))}
    </div>
  );
};
