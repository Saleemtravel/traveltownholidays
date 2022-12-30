import { useState } from "react";

const ReadMore = ({ isList, children, count }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const text = children;

  if (isList && text.length <= count) {
    return <ul>{text}</ul>;
  }
  if (isList) {
    return (
      <>
        {isReadMore
          ? text.map((listItem, index) => {
              if (index < (count || 4)) return listItem;
              return null;
            })
          : text}
        <span onClick={() => setIsReadMore(!isReadMore)} className='readMore'>
          {isReadMore ? " Read More..." : " Show Less"}
        </span>
      </>
    );
  }

  if (text.length < 220) {
    return <p>{text}</p>;
  }

  return (
    <p>
      {isReadMore ? text.slice(0, 200) : text}
      <span onClick={() => setIsReadMore(!isReadMore)} className='readMore'>
        {isReadMore ? " Read More..." : " Show Less"}
      </span>
    </p>
  );
};
export default ReadMore;
