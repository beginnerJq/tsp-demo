/**
 * 场景初始化执行
 */
export const shimLight = (ssp) => {

  const directionalLight = ssp.createDirectionalLight({
    id: 'defaultDirectionalLight',
    name: 'defaultDirectionalLight',
    position: {
      x: 24,
      y: 40,
      z: 25,
    },
    target: {
      x: -20,
      y: -20,
      z: 0,
    },
    openShadow: true,
    mapSize: 6000,
  });

  /**
   * 平行光阴影的投射区域
   */
  // const cameraHelper = new ssp.THREE.CameraHelper( directionalLight.shadow.camera )

  // ssp.viewport.scene.add( cameraHelper )

  return directionalLight;
};
