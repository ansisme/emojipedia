import React from "react";
import Card from "./Card.jsx";
import emojipedia from "../emojipedia";

function CreateCard(emoji) {
  return (
    <Card
      key={emoji.id}
      id={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(CreateCard)}</dl>
    </div>
  );
}
export default App;
