<<<<<<< HEAD
<<<<<<< HEAD
import React from "react"

import { useState, useEffect } from "react"
import VideoList from "../components/Videos/VideoList"
import VideoUpload from "../components/Videos/VideoUpload"
import VideoPlayer from "../components/Videos/VideoPlayer"
import { getVideos, uploadVideo, deleteVideo } from "../services/videos"

interface Video {
  id: number
  title: string
  file_path: string
}

const VideosPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([])
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  useEffect(() => {
    fetchVideos()
  }, [])

  const fetchVideos = async () => {
    try {
      const fetchedVideos = await getVideos()
      setVideos(fetchedVideos as Video[])
    } catch (error) {
      console.error("Failed to fetch videos:", error)
      // Handle error (e.g., show error message to user)
    }
  }

  const handleUploadVideo = async (file: File, title: string) => {
    try {
      await uploadVideo(file, title)
      fetchVideos()
    } catch (error) {
      console.error("Failed to upload video:", error)
      // Handle error (e.g., show error message to user)
    }
  }

  const handleDeleteVideo = async (videoId: number) => {
    try {
      await deleteVideo(videoId)
      fetchVideos()
      setSelectedVideo(null)
    } catch (error) {
      console.error("Failed to delete video:", error)
      // Handle error (e.g., show error message to user)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Videos</h1>
      <VideoUpload onUpload={handleUploadVideo} />
      <div className="flex mt-8">
        <div className="w-1/3 pr-4">
          <VideoList videos={videos} onSelectVideo={setSelectedVideo} onDeleteVideo={handleDeleteVideo} />
        </div>
        <div className="w-2/3">{selectedVideo && <VideoPlayer video={selectedVideo} />}</div>
      </div>
    </div>
  )
}

export default VideosPage

=======
=======
// /src/pages/VideosPage.tsx
>>>>>>> d386ccf (Нужен бэк для users and companies)
import React, { useState, useEffect } from "react";
import VideoList from "../components/Videos/VideoList";
import VideoUpload from "../components/Videos/VideoUpload";
import VideoPlayer from "../components/Videos/VideoPlayer";
import { getVideos, uploadVideo, deleteVideo } from "../services/videos";
<<<<<<< HEAD
=======
import Layout from "../components/Layout/Layout";
>>>>>>> d386ccf (Нужен бэк для users and companies)

interface Video {
  id: number;
  title: string;
  file_path: string;
}

const VideosPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const fetchedVideos = await getVideos();
      setVideos(fetchedVideos);
    } catch (err: any) {
      setError(err.message);
    }
  };

<<<<<<< HEAD
=======
  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
  };

>>>>>>> d386ccf (Нужен бэк для users and companies)
  const handleUploadVideo = async (file: File, title: string) => {
    try {
      await uploadVideo(file, title);
      await fetchVideos();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleDeleteVideo = async (videoId: number) => {
    try {
      await deleteVideo(videoId);
      if (selectedVideo && selectedVideo.id === videoId) {
        setSelectedVideo(null);
      }
      await fetchVideos();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Videos</h1>
        {error && <p className="text-red-500">{error}</p>}

        <VideoUpload onUpload={handleUploadVideo} />

        <div className="flex mt-8">
          <div className="w-1/3 pr-4">
            <VideoList
                videos={videos}
                onSelectVideo={setSelectedVideo}
                onDeleteVideo={handleDeleteVideo}
            />
          </div>
          <div className="w-2/3">
            {selectedVideo && <VideoPlayer video={selectedVideo} />}
          </div>
        </div>
      </div>
=======
      <Layout>
        <h1 className="text-2xl font-bold mb-4">Videos</h1>
        {error && <p className="text-red-500">{error}</p>}
        <VideoUpload onUpload={handleUploadVideo} />
        <div className="flex flex-col md:flex-row mt-8 gap-4">
          <div className="md:w-1/3">
            <VideoList videos={videos} onSelectVideo={handleSelectVideo} onDeleteVideo={handleDeleteVideo} />
          </div>
          <div className="md:w-2/3">{selectedVideo && <VideoPlayer video={selectedVideo} />}</div>
        </div>
      </Layout>
>>>>>>> d386ccf (Нужен бэк для users and companies)
  );
};

export default VideosPage;
<<<<<<< HEAD
>>>>>>> 74c1c3e (fixes)
=======
>>>>>>> d386ccf (Нужен бэк для users and companies)
