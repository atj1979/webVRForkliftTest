import 'aframe';
import 'aframe-environment-component';
import 'aframe-teleport-controls';
import React from 'react';
const forkliftobj = require('./meshes/forklift/electric-forklift.obj');
const forkliftmtl = require('./meshes/forklift/electric-forklift.mtl');



class VRScene extends React.Component {
  render () {
    return (
      <a-scene stats vr-mode-ui="enabled: false">
        <a-entity id="cameraRig" position="0 1.5 0">
          <a-entity id="head" camera wasd-controls look-controls></a-entity>
          <a-entity id="left-hand" hand-controls="left" teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head; collisionEntities: .environmentGround"></a-entity>
          <a-entity id="right-hand" hand-controls="right" teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head; collisionEntities: .environmentGround"></a-entity>
        </a-entity>
        <a-entity environment="preset: forest" id="ForestSetting"></a-entity>
        <a-assets>
          <a-asset-item id="forklift-obj" src={forkliftobj}></a-asset-item>
          <a-asset-item id="forklift-mtl" src={forkliftmtl}></a-asset-item>
        </a-assets>
        <a-light type="point" light="angle:90;intensity:0.41000000000000003" position="0 5 5" id="PointLight"/>
        {/* <a-plane position="0 0 -4" rotation="-90 0 0" width="400" height="400" color="#7BC8A4"></a-plane> */}
        <a-sky color="#ECECEC"></a-sky>
        <a-entity vive-controls="hand: left" id="Left Hand"></a-entity>
        <a-entity vive-controls="hand: right" id="Right Hand"></a-entity>
        <a-entity id="Forklift" obj-model="obj: #forklift-obj; mtl: #forklift-mtl" scale=".0009 .0009 .0009" position="2 0.840 -5" rotation="0 0 1.040"></a-entity>
      </a-scene>
    );
  }
}

export default VRScene;