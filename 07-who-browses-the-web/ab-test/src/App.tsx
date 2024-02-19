import "./App.css";
import Static from "./components/Static/";
import SilverBullet from "./components/SilverBullet";
import NewsLetter from "./components/NewsLetter";
import { useEffect, useState } from "react";

function App() {
  const [isSilverBulletEnabled, setIsSilverBulletEnabled] = useState(false);

  useEffect(() => {
    const isSilverBulletEnabled = Math.random() >= 0.5;
    setIsSilverBulletEnabled(isSilverBulletEnabled);
  }, []);

  return (
    <>
      <Static />
      {isSilverBulletEnabled && <SilverBullet />}
      <NewsLetter isSilverBulletEnabled={isSilverBulletEnabled} />
    </>
  );
}

export default App;
