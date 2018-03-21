import 'aframe';
import 'aframe-environment-component';
import 'aframe-teleport-controls';
import * as React from 'react';
const forkliftobj = require('./meshes/forklift/electric-forklift.obj');
const forkliftmtl = require('./meshes/forklift/electric-forklift.mtl');

class VRScene extends React.Component {
  render () {
    return (
      <a-scene stats="true" vr-mode-ui="enabled: false">
        <a-entity id="cameraRig" position="0 1.5 0">
          <a-entity id="head" camera="true" wasd-controls="true" look-controls="true" />
          <a-entity 
            id="left-hand" 
            hand-controls="left" 
            teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head; collisionEntities: .environmentGround"
          />
          <a-entity 
            id="right-hand" 
            hand-controls="right" 
            teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head; collisionEntities: .environmentGround"
          />
        </a-entity>
        <a-entity environment="preset: forest" id="ForestSetting"/>
        <a-assets>
          <a-asset-item id="forklift-obj" src={forkliftobj}/>
          <a-asset-item id="forklift-mtl" src={forkliftmtl}/>
        </a-assets>
        <a-light type="point" light="angle:90;intensity:0.41000000000000003" position="0 5 5" id="PointLight"/>
        <a-sky color="#ECECEC"/>
        <a-entity vive-controls="hand: left" id="Left Hand"/>
        <a-entity vive-controls="hand: right" id="Right Hand"/>
        <a-entity 
          id="Forklift" 
          obj-model="obj: #forklift-obj; mtl: #forklift-mtl" 
          scale=".0009 .0009 .0009" 
          position="2 0.840 -5" 
          rotation="0 0 1.040"
        />
      </a-scene>
    );
  }
}

export default VRScene;