
import VirtualizedList from "./Components/VirtualizedList";
import "./styles.css";

const LIST = Array.from({ length: 100000 }, (_, index) => index + 1);

export default function App() {
  return (
    <VirtualizedList list={LIST} height={400} width={300} itemHeight={35} />
  );
}




import { useState } from "react";

export default function VirtualizedList({ list, height, width, itemHeight }) {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };

  const visibleList = list.slice(indices[0], indices[1] + 1);
  return (
    <div
      className="container"
      onScroll={handleScroll}
      style={{ height, width, background: "grey", overflow: "auto" }}
    >
      <div style={{ height: list.length * itemHeight, position: "relative" }}>
        {visibleList.map((item, index) => {
          return (
            <div
              className="item"
              style={{
                height: itemHeight,
                background: "coral",
                borderTop: "5px solid grey",
                position: "absolute",
                top: (indices[0] + index) * itemHeight,
                width: "100%",
                textAlign: "center",
                color: "whitesmoke",
              }}
            >
              {"Item " + item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
