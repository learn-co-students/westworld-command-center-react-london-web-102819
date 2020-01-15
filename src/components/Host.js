import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = ({selectedHost, host, setSelectedHost}) => {

    return(
        <Card
            className= {selectedHost && selectedHost.id === host.id ? "host selected" : "host"}
            onClick={() => setSelectedHost(host)}
            image={host.imageUrl}
            raised
        />
    )
}

export default Host
