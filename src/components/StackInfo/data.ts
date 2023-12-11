import bun from '../../assets/bun.png'
import charp from '../../assets/charp.png'
import docker from '../../assets/docker.png'
import fastify from '../../assets/fastify.png'
import go from '../../assets/go.png'
import js from '../../assets/js.png'
import kuber from '../../assets/kuber.png'
import mongodb from '../../assets/mongodb.svg'
import mysql from '../../assets/mysql.svg'
import nest from '../../assets/nest.png'
import nodejs from '../../assets/nodejs.svg'
import php from '../../assets/php.svg'
import postgres from '../../assets/postgresql.svg'
import python from '../../assets/python.svg'
import react from '../../assets/react.svg'
import redis from '../../assets/redis.png'
import redux from '../../assets/redux.svg'
import styled from '../../assets/styled-components.svg'
import ts from '../../assets/ts.svg'
import vite from '../../assets/vite.png'
import vk from '../../assets/vk.svg'
import vue from '../../assets/vue.svg'

export interface Technology {
  name: string
  logo: string
  level: string
}

export const technologiesFront: Technology[] = [
  { name: 'React', logo: react, level: 'Advanced' },
  { name: 'JavaScript', logo: js, level: 'Advanced' },
  { name: 'TypeScript', logo: ts, level: 'Intermediate' },
  { name: 'Redux Toolkit', logo: redux, level: 'Intermediate' },
  { name: 'Vue', logo: vue, level: 'Beginner' },
  { name: 'Styled Components', logo: styled, level: 'Advanced' },
  { name: 'Vite', logo: vite, level: 'Intermediate' },
  { name: 'VKUI', logo: vk, level: 'Intermediate' }
]

export const technologiesBackend: Technology[] = [
  { name: 'NestJS', logo: nest, level: 'Beginner' },
  { name: 'MongoDB', logo: mongodb, level: 'Intermediate' },
  { name: 'MySQL', logo: mysql, level: 'Intermediate' },
  { name: 'PostgreSQL', logo: postgres, level: 'Intermediate' },
  { name: 'PHP', logo: php, level: 'Beginner' },
  { name: 'Redis', logo: redis, level: 'Beginner' },
  { name: 'NodeJS', logo: nodejs, level: 'Intermediate' },
  { name: 'Fastify', logo: fastify, level: 'Beginner' },
  { name: 'Bun', logo: bun, level: 'Intermediate' }
]

export const technologiesOther: Technology[] = [
  { name: 'C# / WPF', logo: charp, level: 'Advanced' },
  { name: 'Docker', logo: docker, level: 'Beginner' },
  { name: 'Kubernetes', logo: kuber, level: 'Beginner' },
  { name: 'Python', logo: python, level: 'Intermediate' },
  { name: 'Go', logo: go, level: 'Beginner' }
]
