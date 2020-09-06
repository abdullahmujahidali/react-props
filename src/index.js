import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h1>My Contacts</h1>

      <h2>{props.name}</h2>
      <img src={props.image} alt="avatar_img" />
      <p>{props.contact}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Card
      name="Beyonce"
      contact="+123 456 789"
      email="b@beyonce.com"
      image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />
    <Card
      name="Jack Bauer"
      contact="+987 654 321"
      email="jack@nowhere.com"
      image="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    />
  </div>,

  document.getElementById("root")
);
