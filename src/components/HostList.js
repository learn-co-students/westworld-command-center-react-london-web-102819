import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host.js'
const HostList = ({hosts, setSelectedHost, selectedHost }) => {

    return(
        <Card.Group itemsPerRow={6}>
            {hosts.map(h => <Host selectedHost = {selectedHost} setSelectedHost = { setSelectedHost } host = {h} key = {h.id} />)}
        </Card.Group>
    )            
}

export default HostList
