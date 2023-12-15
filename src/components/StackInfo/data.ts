import {
  bun,
  charp,
  docker,
  elysia,
  fastify,
  go,
  js,
  kuber,
  mongodb,
  mysql,
  nest,
  nodejs,
  php,
  postgres,
  python,
  react,
  redis,
  redux,
  rust,
  styled,
  ts,
  vite,
  vk,
  vue,
  zustand
} from '../../assets/technologies.ts'

export interface Technology {
  name: string
  logo: string
  level: string
}

export const technologiesFront: Technology[] = [
  { name: 'React', logo: react, level: 'Advanced' },
  { name: 'JavaScript', logo: js, level: 'Advanced' },
  { name: 'TypeScript', logo: ts, level: 'Advanced' },
  { name: 'Redux Toolkit', logo: redux, level: 'Intermediate' },
  { name: 'Vue', logo: vue, level: 'Beginner' },
  { name: 'Styled Components', logo: styled, level: 'Advanced' },
  { name: 'Vite', logo: vite, level: 'Advanced' },
  { name: 'VKUI', logo: vk, level: 'Intermediate' },
  { name: 'Zustand', logo: zustand, level: 'Beginner' }
]

export const technologiesBackend: Technology[] = [
  { name: 'NestJS', logo: nest, level: 'Beginner' },
  { name: 'MongoDB', logo: mongodb, level: 'Intermediate' },
  { name: 'MySQL', logo: mysql, level: 'Intermediate' },
  { name: 'PostgreSQL', logo: postgres, level: 'Intermediate' },
  { name: 'PHP / Laravel', logo: php, level: 'Intermediate' },
  { name: 'Redis', logo: redis, level: 'Beginner' },
  { name: 'NodeJS', logo: nodejs, level: 'Intermediate' },
  { name: 'Fastify', logo: fastify, level: 'Beginner' },
  { name: 'Bun', logo: bun, level: 'Intermediate' },
  { name: 'ElysiaJS', logo: elysia, level: 'Advanced' }
]

export const technologiesOther: Technology[] = [
  { name: 'Rust', logo: rust, level: 'Beginner' },
  { name: 'C# / WPF', logo: charp, level: 'Intermediate' },
  { name: 'Docker', logo: docker, level: 'Beginner' },
  { name: 'Python', logo: python, level: 'Intermediate' },
  { name: 'Go', logo: go, level: 'Too small' },
  { name: 'Kubernetes', logo: kuber, level: 'Beginner' }
]
