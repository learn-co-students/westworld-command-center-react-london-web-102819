import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo.js';

const Details = ({editSelectedHost, areas, selectedHost}) => {
    // We'll render the logo if no host is selected. But if a host does get selected....
    // Watch the video to see how this works in the app.

    function renderDetails() {
        if (selectedHost)
            return <HostInfo areas = {areas} editSelectedHost = {editSelectedHost} selectedHost = {selectedHost} />
        return  <Image size='medium' src={Images.westworldLogo}/>
    }

    return(
        <Segment id="details" className="HQComps">
            {renderDetails()}
        </Segment>
    )
}

export default Details
