import React, {useEffect, useState} from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap.js';
import Headquarters from './components/Headquarters.js';
import { Log } from './services/Log'

const AREA_URL = "http://localhost:3000/areas/";
const HOST_URL = "http://localhost:3000/hosts/";

function App() {

    const [areas, setAreas] = useState([]);
    const [hosts, setHosts] = useState([]);
    const [selectedHost, setSelectedHost] = useState(null);
    const [logs, setLogs] = useState([]);

    const anyInactive = hosts.some(h => h.active === false);

    function toggleAll(anyInactive) {

        hosts.forEach(h => patchHost({...h, active: anyInactive})
            .then(resp => resp.json())
            .then(host => setHosts(hosts.map(h => {
                if (h.id === host.id) h.active = anyInactive;
                return h;
            })))
        )
        setLogs([anyInactive ? Log.warn("Activated all hosts") : Log.notify("Decommisioned all hosts"), ...logs])
    }

    function handleHostResponse(respProm) {
        return respProm.then(resp => resp.json())
            .then( modifiedHost => {setSelectedHost(modifiedHost);
                setHosts(hosts.map(h => {
                    if (h.id === modifiedHost.id) return modifiedHost;
                    return h;
                }))
                return modifiedHost;
            })
    }

    function patchHost(host) {
        return fetch(HOST_URL + host.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(host)
        })
    }

    function editSelectedHost(e, {value}) {
        if (value) {

            if (value === selectedHost.area) return;

            const newArea = areas.find(a => a.name === value)
            const currentCount = hosts.reduce(((acc, h) => h.area === newArea.name? acc + 1 : acc), 0);

            if (currentCount < newArea.limit) {
                handleHostResponse(patchHost({...selectedHost, area: newArea.name}))
                    .then(modifiedHost => 
                        setLogs([Log.notify(`${modifiedHost.firstName} set in area ${format(newArea.name)}`), ...logs]))
            } else {
                setLogs([Log.error(`Too many hosts. Cannot add ${selectedHost.firstName} to ${format(newArea.name)}`), ...logs])
            } 
        } 
        else {
            handleHostResponse(patchHost({...selectedHost, active: !selectedHost.active}))
                .then(modifiedHost => {
                    modifiedHost.active? setLogs([Log.warn(`Activated ${modifiedHost.firstName}`), ...logs]) :
                        setLogs([Log.notify(`Decommisioned ${modifiedHost.firstName}`), ...logs]);
                }) 
        }
    }

    function format(name) {
        return name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
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
                anyInactive = {anyInactive}
                toggleAll = {toggleAll}
                logs = {logs}
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
