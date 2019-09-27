import React from 'react'
//
import legopink from '../image/legopink.jpg'
import { Pane, Text } from 'evergreen-ui'

export default () => (
    <div style={{ textAlign: 'center' }}>
        <h1>Welcome to React-Static</h1>
        <img src={legopink} />

        <Pane
            height={120}
            width={240}
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="default"
        >
            <Text>Pane</Text>
        </Pane>
    </div>
)
