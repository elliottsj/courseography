'use strict'

import React from 'react'

import { fetchDefaultGraph } from '../../actions/GraphActions'

let Graph = React.createClass({

  propTypes: {
    graphId: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <div>This is the graph</div>
    )
  }

})

export default Graph
