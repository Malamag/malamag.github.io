'use strict'

import * as preproc from './scripts/preprocess.js'
import * as viz from './scripts/viz.js'
import * as helper from './scripts/helper.js'
import * as tooltip from './scripts/tooltip.js'
import * as event from './scripts/event.js'
import {sankey as Sankey} from 'd3-sankey'
import * as d3Chromatic from 'd3-scale-chromatic'

import d3Tip from 'd3-tip'


/**
 * @file This file is the entry-point for the the code.
 * @author Maxym Lamtohe
 * @version v1.0.0
 */

(function (d3) {
  const margin = { top: 80, right: 0, bottom: 80, left: 55 }


  let bounds
  let svgSize
  let graphSize
 
  const otherColor = "#CCC";
  const colorScale = d3.scaleSequential( d3Chromatic.interpolateYlGnBu)

  const tip = d3Tip().attr('class', 'd3-tip').html(function (d) { return tooltip.getContents(d) })
  d3.select('.main-svg').call(tip)

  d3.csv('./pset_env_route_vit.csv').then(function (data) {
    
    console.log("data : ", data)
    
    data = data.filter(d => d.Gravite == "Grave ou Mortel")

    console.log("data : ", data)
    const g = helper.generateG(margin)

    var keys = Object.keys(data[0])
    keys.pop();
    console.log(keys)
    const graph = viz.CreateGraphNodeAndLink (keys, data)
    console.log("graph : ", graph)

    viz.setColorScaleDomain (colorScale, graph.links)

    setSizing() 
    build()

    /*var first = d3.select("#graph-g")
      .selectAll(".graph-node")
      .filter(d => d.name == "Grave ou Mortel")
      .data()
      
    console.log("first : ", first)*/
      
    //event.onClickEvent(first[0], links, gravityKeys, lineColorScale, updateLineColorScale)
    /**
     *   This function builds the graph.
     */

    function build() {
      const sankey = Sankey()
        .nodeSort(null)
        .linkSort(null)
        .nodeWidth(4)
        .nodePadding(20)
        .extent([[0, 5], [graphSize.width, graphSize.height]])

      const {nodes, links} = sankey({
        nodes: graph.nodes.map(d => Object.assign({}, d)),
        links: graph.links.map(d => Object.assign({}, d))
      });

      viz.CreateSVGNodes(data, nodes, tip, graphSize.height)
      viz.CreateSVGLines(links, otherColor)
      
      viz.CreateSVGTextInfo(graphSize.width)
      event.setEventHandler(colorScale, otherColor)

    }
    

    /**
     *   This function handles the graph's sizing.
     */
    function setSizing () {
      bounds = d3.select('.graph').node().getBoundingClientRect()

      svgSize = {
        width: bounds.width,
        height: 720
      }

      graphSize = {
        width: svgSize.width - margin.right - margin.left,
        height: svgSize.height - margin.bottom - margin.top
      }

      helper.setCanvasSize(svgSize.width, svgSize.height)
    }

    
    window.addEventListener('resize', () => {
      setSizing()
      build()
    })
  })
})(d3)
