import React from 'react'
import { Segment, Button } from 'semantic-ui-react';

const LogPanel = ({anyInactive, logs, toggleAll}) => {


  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
      </pre>
      
      <Button
          onClick = {() => toggleAll(anyInactive)}
        fluid
        color={"red"}
          content={anyInactive? "ACTIVATE ALL" : "DECOMMISION ALL" }
      />
    </Segment>
  )
}

export default LogPanel
