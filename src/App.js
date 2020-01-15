import React, {useEffect, useState} from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap.js';
import Headquarters from './components/Headquarters.js';

const AREA_URL = "http://localhost:3000/areas";
const HOST_URL = "http://localhost:3000/hosts";

function App() {

    const [areas, setAreas] = useState([]);
    const [hosts, setHosts] = useState([]);
    const [selectedHost, setSelectedHost] = useState(null);

    function editSelectedHost(host) {
        console.log(host);
    }

    useEffect(() => {
        fetch(AREA_URL)
            .then(data => data.json())
            .then(areas => setAreas(areas))
    }, []);

    useEffect(() => {
        fetch(HOST_URL)
            .then(data => data.json())
            .then(hosts => setHosts(hosts))
    }, [])

    return (
        <Segment id='app'>
            <WestworldMap 
                areas = {areas} 
                selectedHost = {selectedHost} 
                setSelectedHost  = {setSelectedHost} 
                hosts = {hosts.filter(h => h.active)}
            />
            <Headquarters 
                editSelectedHost = {editSelectedHost}
                selectedHost = {selectedHost} 
                areas = {areas} 
                setSelectedHost  = {setSelectedHost} 
                hosts = {hosts.filter(h => !h.active)}
            />
        </Segment>
    )

}

export default App;
