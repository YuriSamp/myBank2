import {
  FaRegHeart,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

import { AiOutlineUnorderedList, AiFillCreditCard } from 'react-icons/ai';

import { GiReceiveMoney } from 'react-icons/gi';

import { BiLineChart, } from 'react-icons/bi';


export const links = [
  {
    id: 1,
    text: 'Conta',
    icon: <AiOutlineUnorderedList />,
    url: '/',
  },
  {
    id: 2,
    text: 'Doação',
    icon: <FaRegHeart />,
    url: '/doacao',
  },
  {
    id: 3,
    text: 'Cartões',
    icon: <AiFillCreditCard />,
    url: '/cartoes',
  },
  {
    id: 4,
    text: 'Emprestimo',
    icon: <GiReceiveMoney />,
    url: '/emprestimos',
  },
  {
    id: 5,
    text: 'Investimento',
    icon: <BiLineChart />,
    url: '/investimento',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://github.com/YuriSamp',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://twitter.com/Yuri_Sampa',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/yurisamp/',
    icon: <FaLinkedin />,
  },
];

