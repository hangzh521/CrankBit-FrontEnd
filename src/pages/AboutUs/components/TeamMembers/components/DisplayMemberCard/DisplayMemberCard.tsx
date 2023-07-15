/* eslint-disable react/no-danger */

import { FC } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import MemberCard from './components/MemberCard'

const members = [
  {
    imgSrc: '',
    name: 'Tao',
    role: 'Leader',
    linkIn: 'www.linkedin.com/in/tom-xu-developer',
  },
  {
    imgSrc: '',
    name: 'Linghan',
    role: 'Tech Lead <br> Scrum Master',
    linkIn: '',
  },
  {
    imgSrc: '',
    name: 'Jeremy',
    role: 'Tech Lead',
    linkIn: '',
  },
  {
    imgSrc: '',
    name: 'Long Chao',
    role: 'Tech Lead',
    linkIn: '',
  },

  {
    imgSrc: '',
    name: 'Steven',
    role: 'Developer',
    linkIn: 'www.linkedin.com/in/steven-guo-0989811a3',
  },

  {
    imgSrc: '',
    name: 'Simon',
    role: 'Developer',
    linkIn: 'http://linkedin.com/in/simon-gao-507594279',
  },

  {
    imgSrc: '',
    name: 'Eren',
    role: 'Developer',
    linkIn: 'http://linkedin.com/in/eren-qu-2620b1192',
  },
  {
    imgSrc: '',
    name: 'Ryan',
    role: 'Developer',
    linkIn: 'http://linkedin.com/in/ryan-hang-58b5901b0',
  },
  {
    imgSrc: '',
    name: 'Kathy',
    role: 'Developer',
    linkIn: 'https://www.linkedin.com/in/kathy-chen-290458',
  },
  {
    imgSrc: '',
    name: 'Maggie',
    role: 'Developer',
    linkIn: '',
  },
  {
    imgSrc: '',
    name: 'Victoria',
    role: 'BA',
    linkIn: '',
  },
  {
    imgSrc: '',
    name: 'Nancy',
    role: 'UI',
    linkIn: '',
  },

  {
    imgSrc: '',
    name: 'Ziqi',
    role: 'Devops',
    linkIn: 'www.linkedin.com/in/ziqi-wang39',
  },
  {
    imgSrc: '',
    name: 'Lawrence',
    role: 'Devops',
    linkIn: 'http://linkedin.com/in/wenbo-li-lawrence',
  },
  {
    imgSrc: '',
    name: 'Yaxu Wang',
    role: 'Devops',
    linkIn: 'www.linkedin.com/in/yaxu-wang',
  },
  {
    imgSrc: '',
    name: 'Hang Zhao',
    role: 'Devops',
    linkIn: 'www.linkedin.com/in/hangzhao521',
  },
]

const DisplayMemberCard: FC = () => (
  <div className="flex flex-wrap justify-center px-28">
    {members.map((member) => (
      <MemberCard key={uuidv4()}>
        <img className="w-12 h-12 rounded-full mx-auto" src="/svg/logo.svg" alt="" />
        <p>{member.name}</p>

        <p
          className="text-xs text-[#6F6F6F]"
          dangerouslySetInnerHTML={{
            __html: `@${member.role}`,
          }}
        />
        <Link className="m-8" to={member.linkIn}>
          <img className="mx-auto" src="/svg/LinkIn.svg" alt="" />
        </Link>
      </MemberCard>
    ))}
  </div>
)
export default DisplayMemberCard
