import { apiRequest } from "../Api";
import { Comment } from "./comments";

export const getAllComments = () =>
  apiRequest<{}, Comment[]>({
    url: "comments",
    params: {
      _limit: 10,
    },
  });
