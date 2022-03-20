import "./App.css";
import Video from "./components/Video";
import { useEffect, useState, useMemo } from "react";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

// function App() {
//   const [counter, setCounter] = useState(0);

//   const handleInput = () => {
//     setCounter(counter + 1);
//   }
//   return (
//     <div className="App">
//       <h1>{counter}</h1>
//       {/* <button onClick={handleInput}>Increase</button> */}
//     </div>
//   )
// }

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getData("videos");
    console.log("useEffect: ", videos);
  }, []);

  function getData(tag) {
    console.log("useGetData");
    getDocs(collection(db, tag)).then((snapshot) =>
      setVideos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }

  return (
    <div
      id="focus"
      tabIndex="1"
      className="flex flex-col items-center snap-y snap-mandatory overflow-scroll h-screen overflow-x-hidden"
    >
      {console.log("render", videos)}
      {videos.map((v, index) => (
        <Video key={index} data={v} />
      ))}
    </div>
  );
}

export const useElementOnScreen = (options, targetRef) => {
  const [isVisibile, setIsVisible] = useState();
  const callbackFunction = (entries) => {
    const [entry] = entries; //const entry = entries[0]
    setIsVisible(entry.isIntersecting);
  };
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);
  return isVisibile;
};

export default App;
