import * as PIXI from 'pixi.js';
import React, { useLayoutEffect, useRef } from 'react';

function App() {
  const appRef = useRef(null);

    useLayoutEffect(() => {
      const app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xD6D2C4 // Set the background color to black
      });

      // // Create the sprite and add it to the stage
      // let sprite = PIXI.Sprite.from('cindyjcheng.github.io/public/dog.jpg');
      // app.stage.addChild(sprite);

      // // Add a ticker callback to move the sprite back and forth
      // let elapsed = 0.0;
      // app.ticker.add((delta) => {
      //   elapsed += delta;
      //   sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
      // })
      
      appRef.current.appendChild(app.view);
      
    }, []);

    return <div ref={appRef}></div>;
  }
  
export default App;