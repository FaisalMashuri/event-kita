import React from "react";
import event from "./event.png";

function LastEvent() {
  return (
    <div className="lastEvent">
      <h5>Last Event</h5>
      <img src={event} />
      <p className="title">Soundrenaline 2019</p>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex illo fugit
        officia vitae blanditiis ratione, provident, assumenda sit neque
        asperiores dicta velit iusto, eos est sint maiores beatae ea harum?
      </p>
      <a href="#">See More</a>
    </div>
  );
}
export default LastEvent;
