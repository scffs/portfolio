import react from '../../assets/react.svg';
import js from '../../assets/js.png';
import ts from '../../assets/ts.svg';
import redux from '../../assets/redux.svg';
import vue from '../../assets/vue.svg';
import styled from '../../assets/styled-components.svg';
import vite from '../../assets/vite.png';
import vk from '../../assets/vk.svg';
import nest from '../../assets/nest.png';
import charp from '../../assets/charp.png';
import mongodb from '../../assets/mongodb.svg';
import mysql from '../../assets/mysql.svg';
import php from '../../assets/php.svg';
import redis from '../../assets/redis.png';
import nodejs from '../../assets/nodejs.svg';

export interface Technology {
  name: string;
  logo: string;
  level: string;
}

export const technologiesFront: Technology[] = [
  { name: 'React', logo: react, level: 'Advanced' },
  { name: 'JavaScript', logo: js, level: 'Advanced' },
  { name: 'TypeScript', logo: ts, level: 'Intermediate' },
  { name: 'Redux Toolkit', logo: redux, level: 'Intermediate' },
  { name: 'Vue', logo: vue, level: 'Beginner' },
  { name: 'Styled Components', logo: styled, level: 'Beginner' },
  { name: 'Vite', logo: vite, level: 'Intermediate' },
  { name: 'VKUI', logo: vk, level: 'Intermediate' },
];

export const technologiesBackend: Technology[] = [
  { name: 'NestJS', logo: nest, level: 'Beginner' },
  { name: 'C#', logo: charp, level: 'Advanced' },
  { name: 'MongoDB', logo: mongodb, level: 'Intermediate' },
  { name: 'MySQL', logo: mysql, level: 'Intermediate' },
  { name: 'PHP', logo: php, level: 'Beginner' },
  { name: 'Redis', logo: redis, level: 'Beginner' },
  { name: 'NodeJS / Express', logo: nodejs, level: 'Intermediate' },
];
