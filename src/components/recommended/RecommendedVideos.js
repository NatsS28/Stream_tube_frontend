import React, { useEffect, useState } from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import { listVideos } from "../../actions/video";
import moment from "moment";

const RecommendedVideos = () => {
  const [gotData, setGotData] = useState([]);

  useEffect(() => {
    listVideos()
      .then((res) => {
        setGotData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {gotData &&
          gotData.map((v, i) => {
            return (
              <VideoCard
                key={i}
                image="http://shlokatech.in/blogImages/node-js-authentication.jpg"
                title={v.title}
                channel={v.writer}
                videoId={`${v.videoId}`}
                views={`${v.views} views`}
                timestamp={moment(v.createdAt).fromNow()}
                channelImage="Nats"
              />
            );
          })}
      </div>
    </div>
  );
};

export default RecommendedVideos;
