import styled from 'styled-components'
import { ReactComponent as VueDotJs } from 'simple-icons/icons/vuedotjs.svg'
import { ReactComponent as Docker } from 'simple-icons/icons/docker.svg'
import { ReactComponent as Postgres } from 'simple-icons/icons/postgresql.svg'
import { ReactComponent as NestJs } from 'simple-icons/icons/nestjs.svg'
import { ReactComponent as Typescript } from 'simple-icons/icons/typescript.svg'
import { ReactComponent as AzureDevops } from 'simple-icons/icons/azuredevops.svg'
import { ReactComponent as Postman } from 'simple-icons/icons/postman.svg'
import { ReactComponent as ElasticSearch } from 'simple-icons/icons/elasticsearch.svg'
import { ReactComponent as Python } from 'simple-icons/icons/python.svg'
import { ReactComponent as Kafka } from 'simple-icons/icons/apachekafka.svg'
import { ReactComponent as Bamboo } from 'simple-icons/icons/bamboo.svg'
import { ReactComponent as Artifactory } from 'simple-icons/icons/jfrog.svg'
import { ReactComponent as NodeJs } from 'simple-icons/icons/nodedotjs.svg'
import { ReactComponent as Javascript } from 'simple-icons/icons/javascript.svg'
import { ReactComponent as Github } from 'simple-icons/icons/github.svg'
import { ReactComponent as JUnit } from 'simple-icons/icons/junit5.svg'
import { ReactComponent as LinkedIn } from 'simple-icons/icons/linkedin.svg'

const VueJsIcon = styled(VueDotJs)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #50c08d;
`
const DockerIcon = styled(Docker)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #2493e6;
`

const PostgresIcon = styled(Postgres)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #3e64d3;
`

const NestJsIcon = styled(NestJs)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #df224e;
`

const TypescriptIcon = styled(Typescript)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #3178c6;
`

const AzureDevopsIcon = styled(AzureDevops)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #0178d7;
`

const ElasticSearchIcon = styled(ElasticSearch)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #015470;
`

const PostmanIcon = styled(Postman)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #fc6a36;
`
const PythonIcon = styled(Python)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #3675aa;
`
const KafkaIcon = styled(Kafka)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #04a0d5;
`
const BambooIcon = styled(Bamboo)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #267cf2;
`
const ArtifactoryIcon = styled(Artifactory)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #3d9844;
`

const NodeJsIcon = styled(NodeJs)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #3d9844;
`
const JavascriptIcon = styled(Javascript)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #dfc920;
`
const GithubIcon = styled(Github)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: white;
`
const JUnitIcon = styled(JUnit)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #d24d46;
`

export const GithubIconLink = styled(Github)`
  height: 70%;
  align-self: center;
  fill: white;
`

export const LinkedInIconLink = styled(LinkedIn)`
  height: 70%;
  align-self: center;
  fill: white;
`

export const IconDictionary: {
  [key: string]: any
} = {
  typescript: <TypescriptIcon key="typescript" />,
  nestjs: <NestJsIcon key="nestjs" />,
  postgres: <PostgresIcon key="postgres" />,
  docker: <DockerIcon key="docker" />,
  vuejs: <VueJsIcon key="vuejs" />,
  postman: <PostmanIcon key="postman" />,
  elasticsearch: <ElasticSearchIcon key="elasticsearch" />,
  azuredevops: <AzureDevopsIcon key="azuredevops" />,
  python: <PythonIcon key="python" />,
  kafka: <KafkaIcon key="kafka" />,
  bamboo: <BambooIcon key="bamboo" />,
  artifactory: <ArtifactoryIcon key="artifactory" />,
  nodejs: <NodeJsIcon key="nodejs" />,
  github: <GithubIcon key="github" />,
  javascript: <JavascriptIcon key="javascript" />,
  junit: <JUnitIcon key="junit" />
}
