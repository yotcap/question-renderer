import { TaskTestSchema } from '../../src/types';

export const MOCK_SCHEMA: TaskTestSchema[] = [
  {
    order: 0,
    type: 'radio',
    title: '<p>hellowor</p><p>wekljf</p><p>ldregerg</p>',
    options: [
      {
        order: 0,
        content: '按照自上而下的顺序执行脚本',
      },
      {
        order: 1,
        content: '能够重复执行某段脚本',
      },
      {
        order: 2,
        type: 'img',
        image: 'https://avatars1.githubusercontent.com/u/24959547?s=400&u=ac1013649afdf6f1ad6c83af70cff5611a150cbf&v=4',
      },
      {
        order: 3,
        content: '如果条件为真，重复执行分支条件积木里面的积木',
      },
    ],
  },
  {
    order: 1,
    type: 'tof',
    title: '<p>看了电视剧弗兰克无</p><img src="https://avatars1.githubusercontent.com/u/24959547?s=460&u=ac1013649afdf6f1ad6c83af70cff5611a150cbf&v=4" alt="" /><p>机肥料空间</p>',
    optional: true,
    options: [
      {
        order: 0,
        content: '对',
      },
      {
        order: 1,
        content: '错',
      },
    ],
  },
  {
    order: 2,
    type: 'bf',
    title: '<p>看了电视____克无机肥料空间</p>',
  },
];
