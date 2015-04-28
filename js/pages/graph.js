'use strict'

import React from 'react'

import Graph from '../components/Graph/Graph'
import { fetchGraph } from '../actions/GraphActions'

// Render the Graph component into <div id='graph'></div>
React.render(
  <Graph />,
  document.querySelector('#graph')
)

// Fetch initial graph
fetchGraph({
  graphId: 1
})
