import React from 'react';
import { Link } from 'react-router-dom';
//to do:

//link to /:id instead of github
//generate new page under /:id with stats



const List = (props) => {

  return (
    <div className="ui cards" style={{ marginLeft: 30, marginTop: 50 }}>
      {props.data.map((item) => (
        <div key={item.id} className="card">
          <div className="content">
            <div className="header">{item.name}</div>
            <div className="description">{item.description}</div>
          </div>
          <div className="ui bottom attached button">
            <i className="add icon"></i><Link to={`/repos/${item.id}`}>More Info</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
