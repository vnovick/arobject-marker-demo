/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';

import {
  ViroARSceneNavigator
} from 'react-viro';

import ArObjectScene from './js/ArObjectScene';

export default class ViroSample extends Component {
  
  render() {
    return (
      <ViroARSceneNavigator 
        apiKey="1839C275-6929-45AF-B638-EF2DEE44C1D9"
        numberOfTrackedImages={2}
        initialScene={{scene: ArObjectScene}} 
      />
    )
  }
}


module.exports = ViroSample
