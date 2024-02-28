import React, { useState } from 'react';

const Title = ({ data }) => {
  const [titleClick, setTitleClick] = useState(false);
  const handleClick = () => {
    setTitleClick(!titleClick);
  };
  
  return (
    <section className="p-5 bg-white">
      <h2 className="font-bold text-[1.2rem] cursor-pointer" onClick={handleClick}>타이틀({data.title?.title.length})</h2>
      {titleClick && (
        <ul>
          {data.title?.title.map((title, index) => (
            <li key={index}>{title.title_name}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Title;
