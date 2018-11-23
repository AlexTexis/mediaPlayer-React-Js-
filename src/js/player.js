import React from 'react'
import {render} from 'react-dom'
import PlayerContainer from './playerUi/container/playerContainer'
const playerUi = document.getElementById('player')

render(<PlayerContainer/>,playerUi)