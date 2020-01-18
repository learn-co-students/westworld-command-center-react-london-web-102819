import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area.js';


const WestworldMap = ({areas, selectedHost, setSelectedHost, hosts}) => {


   function format(name) {
       return name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
   }

    return (
        <Segment id="map" >
            {areas.map(a => <Area selectedHost = {selectedHost} setSelectedHost  = {setSelectedHost} id = {a.name} key = {a.id} name = {format(a.name)} hosts = {hosts.filter(h => h.area === a.name)}/>)}
        </Segment>
    )
}

export default WestworldMap
