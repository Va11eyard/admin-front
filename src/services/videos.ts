<<<<<<< HEAD
<<<<<<< HEAD
import api from "./api"

export const getVideos = async () => {
  const response = await api.get("/videos")
  return response.data
}

export const uploadVideo = async (file: File, title: string) => {
  const formData = new FormData()
  formData.append("file", file)
  formData.append("title", title)
  const response = await api.post("/videos", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return response.data
}

export const deleteVideo = async (videoId: number) => {
  const response = await api.delete(`/videos/${videoId}`)
  return response.data
}

=======
=======
>>>>>>> d386ccf (Нужен бэк для users and companies)
// videos.ts
import api from "./api";

interface Video {
  id: number;
  title: string;
  file_path: string;
}

interface PageResponse<T> {
  content: T[];
  pageable: any;
  totalElements: number;
  totalPages: number;
}

export const getVideos = async (): Promise<Video[]> => {
  const response = await api.get<PageResponse<Video>>("/videos"); // Use "/videos", not "/api/videos"
  return response.data.content;
};

export const uploadVideo = async (file: File, title: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("title", title);
  const response = await api.post("/videos", formData, { // Use "/videos", not "/api/videos"
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteVideo = async (videoId: number) => {
  const response = await api.delete(`/videos/${videoId}`); // Use "/videos", not "/api/videos"
  return response.data;
<<<<<<< HEAD
};
>>>>>>> 74c1c3e (fixes)
=======
};
>>>>>>> d386ccf (Нужен бэк для users and companies)
