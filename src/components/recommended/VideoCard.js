import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import "./VideoCard.css";

function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
  videoId,
}) {
  return (
    <div className="videoCard">
      <Link to={`/video/watch/${videoId}`}>
        <img className="videoCard__thumbnail" src={"https://us.123rf.com/450wm/saiful007/saiful0071908/saiful007190800155/129027035-letter-n-logo-graphic-elegant-and-unique-sliced-design-template-vector.jpg?ver=6"} alt={channel} />
      </Link>
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={"Nats"}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
