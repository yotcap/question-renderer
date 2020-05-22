import { TaskTestSchema } from '../../src/types';

export const MOCK_SCHEMA: TaskTestSchema[] = [
  {
    order: 0,
    type: 'radio',
    questions:
      'Scraino中如果当前角色被其它角色遮挡住，可以使用下面（）积木将当前角色移动到舞台最上层。',
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
        image: 'https://www.like-coding.com/laputa/0/0/1/cover.png',
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
    questions: 'Scraino中关于选择结构（分支结构）的功能描述正确的是（）。',
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
    questions: '卡位的痕迹____弗兰克文件才像',
  },
];
