import React, { useState } from 'react';
import '../css/TinderCards.css';
import TinderCard from 'react-tinder-card';


function TinderCards(){
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
    },
    {
      name: 'Jeff Bezos',
      url: "https://content.fortune.com/wp-content/uploads/2020/02/GettyImages-1078542150.jpg?resize=750,500",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " +nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return(
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">

      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}>
          <div
          style={{ backgroundImage: "url(" + person.url + ")"}}
          className="card">
          <h3>{person.name}</h3>
          </div>
      </TinderCard>
        ))}

      </div>
    </div>
  );
}

export default TinderCards;
