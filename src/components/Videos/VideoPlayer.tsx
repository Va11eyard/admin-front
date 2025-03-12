<<<<<<< HEAD
<<<<<<< HEAD
import React from "react"

interface Video {
  id: number
  title: string
  file_path: string
}

interface VideoPlayerProps {
  video: Video
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
      <video controls className="w-full">
        <source src={video.file_path} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer

=======
=======
>>>>>>> d386ccf (Нужен бэк для users and companies)
import React from "react";

interface Video {
    id: number;
    title: string;
<<<<<<< HEAD
    file_path?: string; // Not used if we fetch file by ID
=======
    file_path?: string;
>>>>>>> d386ccf (Нужен бэк для users and companies)
}

interface VideoPlayerProps {
    video: Video;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
    return (
<<<<<<< HEAD
        <div>
            <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
            <video controls className="w-full">
                <source
                    src={`http://localhost:8080/api/videos/${video.id}/file`}
                    type="video/mp4"
                />
=======
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
            <video controls className="w-full">
                <source src={`http://localhost:8080/api/videos/${video.id}/file`} type="video/mp4" />
>>>>>>> d386ccf (Нужен бэк для users and companies)
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
<<<<<<< HEAD
>>>>>>> 74c1c3e (fixes)
=======
>>>>>>> d386ccf (Нужен бэк для users and companies)
