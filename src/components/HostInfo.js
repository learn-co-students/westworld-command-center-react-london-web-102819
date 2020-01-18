import '../stylesheets/HostInfo.css'
import React from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


function HostInfo({editSelectedHost, selectedHost, areas}) {

    function format(name) {
        return name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    }

    const {firstName, imageUrl, active, gender} = selectedHost;

    return (
        <Grid>
            <Grid.Column width={6}>
                <Image
                    src={imageUrl}
                    floated='left'
                    size='small'
                    className="hostImg"
                />
            </Grid.Column>
            <Grid.Column width={10}>
                <Card>
                    <Card.Content>
                        <Card.Header>
                            {firstName} | { gender === "Male" ? <Icon name='man' /> : <Icon name='woman' />}
                        </Card.Header>
                        <Card.Meta>
                            <Radio
                                onChange={editSelectedHost}
                                label={active? "Active" : "Decommisioned"}
                                checked={active}
                                slider
                            />
                        </Card.Meta>

                        <Divider />
                        Current Area:
                        <Dropdown
                            onChange={editSelectedHost}
                            value={selectedHost.area}
                            options={areas.map(a => ({key: a.name, text: format(a.name), value: a.name}))}
                            selection
                        />
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>
    )

}

export default HostInfo
