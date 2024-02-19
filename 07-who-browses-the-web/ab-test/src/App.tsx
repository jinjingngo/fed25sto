import "./App.css";
import Static from "./components/Static/";
import SilverBullet from "./components/SilverBullet";
import NewsLetter from "./components/NewsLetter";

const isSilverBulletEnabled = Math.random() >= 0.5;

function App() {
  return (
    <>
      <Static />
      {isSilverBulletEnabled && <SilverBullet />}
      <NewsLetter isSilverBulletEnabled={isSilverBulletEnabled} />
    </>
  );
}

export default App;
