import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./Lists";

export const Card = () => {
  return (
    <>
      <ul className="grid grid-three--cols">
        {seriesData.map((curElem) => {
          return <SeriesCard key={curElem.id} data={curElem} />;
        })}
      </ul>
    </>
  );
};
