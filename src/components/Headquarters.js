import React from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage.js';
import LogPanel from './LogPanel.js';

function Headquarters({editSelectedHost, areas, setSelectedHost , selectedHost, hosts}) {

    return(
        <Grid celled='internally'>
            <Grid.Column width={8}>

                <ColdStorage setSelectedHost = {setSelectedHost} selectedHost = {selectedHost} hosts = {hosts} />

            </Grid.Column>
            <Grid.Column width={5}>
                <Details areas = {areas} selectedHost = {selectedHost} editSelectedHost = {editSelectedHost}/>
            </Grid.Column>
            <Grid.Column width={3}>

                <LogPanel />

            </Grid.Column>
        </Grid>
    )

}

export default Headquarters;
