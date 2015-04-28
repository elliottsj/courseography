'use strict'

import request from 'superagent'

import AppDispatcher from '../dispatcher/AppDispatcher'
import { GraphActions } from '../constants/GraphConstants'

export function fetchGraph({graphId}) {
  request
    .get(`static/res/grahs/${graphId}.svg`)
    .end((err, res) => {
      if (err) {
        debugger;
        AppDispatcher.dispatch({
          actionType: GraphActions.FETCH_GRAPH_FAILURE,
          err
        })
      } else {
        AppDispatcher.dispatch({
          actionType: GraphActions.FETCH_GRAPH_SUCCESS,
          svgString: res.text
        })
      }
    })
}

export function fetchDefaultGraph() {
  fetchGraph({
    graphId: '1'
  })
}
