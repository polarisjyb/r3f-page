import '../public/img/d.png'
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <>
      <h1> dist test </h1>
      <img src='../public/img/d.png' alt='cat'></img>
      <Canvas style={{ background: '#171717' }}>
      </Canvas>
    </>
  );
};

export default App;