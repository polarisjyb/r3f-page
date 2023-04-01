import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Model from './Model';

const App = () => {
  const ref = useRef();
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage controls={ref} preset='rembrandt' intensity={1.5} environment='warehouse'>
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
  );
};

export default App;

/*
  - Canvas : react-three-fiber 장면을 정의.
  - shadows : 그림자. (true or false)
  - dpr(devicePixelRatio): 픽셀 비율, window.devicePixelRatio or automatic: [min, max] 기본 값 [1, 2]
  - Suspense : 장면 로드를 처리하는 데 사용. fallback prop은 null로 설정.
    즉, 개체가 로드되는 동안 아무 것도 표시 안함.
  - Stage : 구성 요소는 장면의 조명과 환경을 설정하는데 사용.
    -- controls : 장면에 대한 카메라 컨트롤 설정.
    -- preset : 장면에 대한 조명을 설정 - rembrandt
    -- intensity : 장면의 조명 강도를 설정
    -- environment : 장면의 환경을 설정 - @react/three/drei 에 포함된 미리 빌드된 환경인 'warehouse'로 설정
  - OrbitControls : 장면에 카메라 컨트롤을 추가하는데 사용.
    해당 ref prop은 위 Stage 구성 요소에 대한 참조인 ref로 설정.
    autoRotate: true 이므로 카메라가 자동으로 회전.
*/