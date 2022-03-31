import React from "react";
import { calculateLapTime, formatTime } from "../utils/utils";

function SplitTime({ splitTimeList }) {
  return (
    <>
      {splitTimeList.length > 0 ? (
        <div className="table">
          <div className="tab-head">
            <div>Laps</div>
            <div>Lap Time</div>
            <div>Total Time</div>
          </div>
          <div className="tab-body" id="tab-body">
            {calculateLapTime(splitTimeList)
              ?.reverse()
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`tab-row ${index % 2 ? "hightlight" : ""}`}
                  >
                    <div>{splitTimeList.length - index}</div>
                    <div>{formatTime(item.lapTime)}</div>
                    <div>{formatTime(item.totalTime)}</div>
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
