import 'aframe';
import React from 'react';
const forkliftobj = require('./meshes/forklift/electric-forklift.obj');
const forkliftmtl = require('./meshes/forklift/electric-forklift.mtl');



class VRScene extends React.Component {
  render () {
    return (
      <a-scene stats vr-mode-ui="enabled: false">
        
        <a-assets>
          <a-asset-item id="forklift-obj" src={forkliftobj}></a-asset-item>
          <a-asset-item id="forklift-mtl" src={forkliftmtl}></a-asset-item>
        </a-assets>
        <a-box color="red" rotation="0 45 45" scale="2 2 2" position="0 0 -10"></a-box>
        <a-light type= "point" position="0 5 5"/>
        <a-plane position="0 0 -4" rotation="-90 0 0" width="400" height="400" color="#7BC8A4"></a-plane>
        <a-sky color="#ECECEC"></a-sky>

        <a-entity obj-model="obj: #forklift-obj; mtl: #forklift-mtl" scale=".005 .005 .005" position="20 5 -30"></a-entity>
      </a-scene>
    );
  }
}

export default VRScene;