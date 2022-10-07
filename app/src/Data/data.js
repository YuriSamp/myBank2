import {
  FaRegHeart,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

import {
  AiOutlineUnorderedList,
  AiFillCreditCard,

} from 'react-icons/ai';

import {
  GiReceiveMoney,
} from 'react-icons/gi';

import {
  BiLineChart,
  BiTransfer,

} from 'react-icons/bi';

import {
  RiBarcodeLine,
} from 'react-icons/ri';

import {
  IoPhonePortraitOutline
} from 'react-icons/io5';

export const links = [
  {
    id: 1,
    text: 'Extrato',
    icon: <AiOutlineUnorderedList />,
    
  },
  {
    id: 2,
    text: 'Boleto',
    icon: <RiBarcodeLine />,
  },
  {
    id: 3,
    text: 'Recarga',
    icon: <IoPhonePortraitOutline />,
  },
  {
    id: 4,
    text: 'Doação',
    icon: <FaRegHeart />,
  },
  {
    id: 5,
    text: 'Cartões',
    icon: <AiFillCreditCard />,
  },
  {
    id: 6,
    text: 'Emprestimo',
    icon: <GiReceiveMoney />,
  },
  {
    id: 7,
    text: 'Transferencia',
    icon: <BiTransfer/>,
  },
  {
    id: 8,
    text: 'Investimento',
    icon: <BiLineChart/>,
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
    url: 'https://www.linkedin.com/in/yuri-santos-5915ba1ab/',
    icon: <FaLinkedin />,
  },
];

