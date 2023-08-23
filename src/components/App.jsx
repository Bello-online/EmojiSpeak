import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojis) {
  return (
    <Entry
      key={emojis.id}
      id={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>EmojiSpeak</span>
      </h1>
      <div>
        {/* This maps through the emojipedia array from the js file */}
        <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
      </div>
    </div>
  );
}

export default App;
