import React from "react";
import { formatTime } from "../utils/utils";

function SplitTime({ splitTimeList }) {
  return (
    <>
      {splitTimeList.length > 0 ? (
        <div className="table">
          <div className="tab-head">
            <div>Laps</div>
            <div>Time</div>
          </div>
          <div className="tab-body" id="tab-body">
            {splitTimeList?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`tab-row ${index % 2 ? "hightlight" : ""}`}
                >
                  <div>{index + 1}</div>
                  <div>{formatTime(item)}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default SplitTime;
