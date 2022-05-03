import React, { Component } from 'react'
import { Cloud, IOptions, renderSimpleIcon } from 'react-icon-cloud'
import * as Styled from './skills-sphere.styles'

// Ugly icon imports for icon cloud
import {
  siJavascript,
  siTypescript,
  siGit,
  siC,
  siCss3,
  siHtml5,
  siNodedotjs,
  siReact,
  siThreedotjs,
  siPycharm,
  siPython,
  siJava,
  siAmazonaws,
  siServerless,
  siFirebase,
  siAzuredevops,
  siPostgresql,
  siPostman,
  siAlibabacloud,
  siAwslambda,
  siAzurepipelines,
  siCanva,
  siFigma,
  siNestjs,
  siAnsible,
  siElasticsearch,
  siApachekafka,
  siRedux,
  siGraphql,
  siNginx,
  siDocker,
  siGatling,
  siVuedotjs,
  siVuetify
} from 'simple-icons/icons'

// Canvas options for icon cloud
const tagCanvasOptions: IOptions = {
  clickToFront: 500,
  depth: 1,
  imageScale: 2,
  initial: [0.1, -0.1],
  outlineColour: '#0000',
  reverse: true,
  tooltip: 'native',
  tooltipDelay: 0,
  wheelZoom: false
}

//change colour of black icons
siThreedotjs.hex = '#fff'
siPycharm.hex = '#21d087'
siAmazonaws.hex = '#f79400'
siApachekafka.hex = '#04a0d5'

// Render icons to work with icon cloud API
const icons = [
  siJavascript,
  siTypescript,
  siGit,
  siC,
  siCss3,
  siHtml5,
  siNodedotjs,
  siReact,
  siThreedotjs,
  siNginx,
  siDocker,
  siPycharm,
  siPython,
  siJava,
  siAmazonaws,
  siServerless,
  siFirebase,
  siAzuredevops,
  siPostgresql,
  siPostman,
  siAlibabacloud,
  siAwslambda,
  siAzurepipelines,
  siCanva,
  siFigma,
  siVuedotjs,
  siVuetify,
  siNestjs,
  siAnsible,
  siElasticsearch,
  siApachekafka,
  siRedux,
  siGraphql,
  siGatling
].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 42,
    minContrastRatio: 0,
    aProps: {
      onClick: (e) => e.preventDefault()
    }
  })
})

class SkillsSphere extends Component {
  render() {
    return (
      <Styled.SkillsSphere>
        <Cloud options={tagCanvasOptions}>{icons}</Cloud>
      </Styled.SkillsSphere>
    )
  }
}

export default SkillsSphere
