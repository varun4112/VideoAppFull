import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import VideoCard from "../component/Videocard.jsx";
import { getAllVideos } from "../services/allAPI.js";

function View({ uploadVideoServerResponse }) {
  const [allVideos, setAllVideos] = useState([]);
  const [delVideo, setDelVideo] = useState(false);

  const getUploadVideos = async () => {
    const { data } = await getAllVideos();
    setAllVideos(data);
  };

  useEffect(() => {
    getUploadVideos();
    setDelVideo(false);
  }, [uploadVideoServerResponse, delVideo]);

  console.log("vcap", allVideos);

  return (
    <>
      <Row>
        {allVideos.length > 0 ? (
          allVideos.map((video) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayData={video} setDelVideo={setDelVideo} />
            </Col>
          ))
        ) : (
          <p>Nothing to Display</p>
        )}
      </Row>
    </>
  );
}

export default View;
