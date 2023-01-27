import { GalleryModal } from "@components/Modals/GalleryModal";
import { GoogleModal } from "@components/Modals/GoogleModal";
import { NewsModal } from "@components/Modals/NewsModal";

export interface App {
  id: string;
  icon: string;
  title: string;
  modalContent: JSX.Element | null;
}

export const apps: App[] = [
  {
    id: "1",
    icon: "camera",
    title: "Camera",
    modalContent: null,
  },
  {
    id: "2",
    icon: "firefox-brands",
    title: "Browser",
    modalContent: <GoogleModal />,
  },
  {
    id: "3",
    icon: "newspaper",
    title: "News",
    modalContent: <NewsModal />,
  },
  {
    id: "4",
    icon: "images",
    title: "Gallery",
    modalContent: <GalleryModal />,
  },
  {
    id: "5",
    icon: "folder",
    title: "Documents",
    modalContent: null,
  },
];
