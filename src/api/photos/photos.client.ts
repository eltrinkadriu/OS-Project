import { apiRequest } from "../Api";
import { Photo } from "./photos";

export const getAllPhotos = () =>
  apiRequest<{}, Photo[]>({
    url: "photos",
    params: {
      _limit: 12,
    },
  });
