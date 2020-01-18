import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList.js'
const ColdStorage = ({selectedHost, setSelectedHost, hosts}) => (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>
        <HostList setSelectedHost = {setSelectedHost} selectedHost = {selectedHost} hosts = {hosts} />
    </Segment>
  </Segment.Group>
)

export default ColdStorage
