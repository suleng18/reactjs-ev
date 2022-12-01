import React from 'react';
import { youtubeData } from '../../data';
import YoutubeItem from './YoutubeItem';

const YoutubeList = (props) => {
  console.log(props.children);
  // Layout: Header, Footer
  return (
    <div className="youtube-list">
      {props.children}
      {youtubeData.map((item, index) => {
        let newClass = '';
        if (index === 1) newClass = 'abc';
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
            className={newClass}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
