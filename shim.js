/**
 * 场景初始化执行
 */
export const shimLight = (ssp) => {
  const ambientLight = ssp.getLightById('defaultAmbientLight'),
    hemisphereLight = ssp.getLightById('defaultHemisphereLight');
  const directionalLight = ssp.getLightById('defaultDirectionalLight');

  ambientLight.visible = false;
  hemisphereLight.visible = false;

  ssp.setDirectionalLight({
    id: 'defaultDirectionalLight',
    name: 'defaultDirectionalLight',
    position: {
      x: 24,
      y: 20,
      z: 25,
    },
    target: {
      x: 0,
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
