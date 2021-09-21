import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Hungry?",
  "Unexpected guests?",
  "Cooking gone wrong?",
  "Movie marathon?",
  "Game night?",
  "Late night at office?"
];

const Heading = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      4000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
             <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.default }
       noOverflow={true}
       inline={false}
   
        
        
        


      />
    </h1>
  );
}

export default Heading;