import "./home.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense, useContext } from "react";
import { Earth } from "../../components/earth";
import { TopSection } from "../../components/topEarth";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../hooks/context/AuthContext";
const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  const {user}=useContext(AuthContext);
  console.log(user);
  return (
    <div style={{backgroundColor:"black"}}>
      <Navbar />
      <div className="bodyfic" style={{  zIndex:"10", position:"relative", top:"3rem"}}>
        <CanvasContainer style={{ width: "100vw", top: "0" , zIndex:"3"}}>
          <TopSection />
          <Canvas style={{ width: "100vw", height: "100vh" }}>
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
          </Canvas>
        </CanvasContainer>
      </div>
      <Footer  />
    </div>
  );
}

export default App;
