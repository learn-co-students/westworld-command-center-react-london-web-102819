import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList.js'

const Area = ({selectedHost, setSelectedHost, id, name, hosts}) => (

    <div className={"area " +  id} id={id}>
        <h3 className='labels'>{name}</h3>

        <HostList selectedHost = {selectedHost} hosts ={hosts} setSelectedHost  = {setSelectedHost} />

    </div>

)

Area.propTypes = {
    hosts: function(props, propName, componentName){
        if(props.hosts.length > props.limit){
            throw Error(
                `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
            )
        }
    }
}

export default Area;
