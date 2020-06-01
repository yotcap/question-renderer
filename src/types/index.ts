/**
 * renderer Ref
 */
export interface RenderRef {
  submit: () => void;
}

/**
 * 习题类型
 *   radio: 选择题
 *   tof: 判断题
 *   bf: 填空题
 */
export type TaskTestType = 'radio' | 'tof' | 'bf';

/**
 * 答案类型
 *   null: 选填未填
 *   options: 选项 ABCD
 *   text: 文本
 */
export type AnswerType = 'options' | 'text' | null;

/**
 * 答案 item
 */
export interface AnswerItemType {
  type: AnswerType;
  content: string;
}

/**
 * 选择题选项 item
 */
export interface TaskTestSchemaOptions {
  /**
   * 次序
   */
  order: number;
  /**
   * 选项类型
   * 默认为文字
   *    img: 图片
   */
  type?: string;
  /**
   * 当选项为文字时有值
   */
  content?: string;
  /**
   * 当类型为 img 时有值
   */
  image?: string;
}

/**
 * 习题 item
 */
export interface TaskTestSchema {
  /**
   * 次序
   */
  order: number;
  type: TaskTestType;
  /**
   * 问题题目
   */
  title: string;
  /**
   * 是否为选做题
   */
  optional?: boolean;
  /**
   * 选项 - 可选
   */
  options?: TaskTestSchemaOptions[];
  /**
   * 答案
   */
  answer?: AnswerItemType;
}
