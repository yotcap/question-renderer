import { TaskTestType } from "./types";

/**
 * 获取习题对应的类型
 * @param {TaskTestType} type 习题类型
 */
export const getTestType = (type: TaskTestType) => {
  switch(type) {
    case 'radio':
      return '单选题';
    case 'tof':
      return '判断题';
    case 'bf':
      return '填空题';
    default:
      Error(`cant parse test type`);
      return '';
  }
};

/**
 * 习题选项的前缀
 */
export const TEST_OPTIONS_PREFIX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
