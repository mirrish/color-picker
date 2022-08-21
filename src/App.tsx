import "./App.css";
import { Color } from "./Color";
import ColorComponent from "./ColorComponent";
import { useState } from "react";
import useColors from "./useColors";

function App() {
  const mappedColors = useColors();
  const [primaryColor, setPrimaryColor] = useState<Color>();
  const [secondaryColor, setSecondaryColor] = useState<Color>();
  const [tertiaryColor, setTertiaryColor] = useState<Color>();
  return (
    <div className="App">
      <div className="grid">
        {Object.keys(mappedColors).map((key) =>
          mappedColors[key].map((c) => {
            if (secondaryColor && primaryColor) {
              return (
                <ColorComponent
                  key={c.color}
                  onClick={setTertiaryColor}
                  primary={primaryColor}
                  secondary={secondaryColor}
                  tertiary={c}
                />
              );
            }
            if (primaryColor) {
              return (
                <ColorComponent
                  key={c.color}
                  onClick={setSecondaryColor}
                  primary={primaryColor}
                  secondary={c}
                />
              );
            }
            return (
              <ColorComponent
                key={c.color}
                onClick={setPrimaryColor}
                primary={c}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
