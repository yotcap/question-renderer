/**
 * 习题渲染器
 */
import React, { useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import { TaskTestSchema, TaskTestSchemaOptions, AnswerItemType } from '../types';
import { getTestType, TEST_OPTIONS_PREFIX } from '../utils';
import styles from './index.less';

type Inputs = {
  example: string,
  exampleRequired: string,
};

interface TestRendererPropTypes {
  render?: any;
  schemas: TaskTestSchema[];
  onSubmit?: (answers: AnswerItemType[]) => void;
}

/**
 * 错误提醒 template
 */
const Errors: React.SFC = () => (
  <p className={styles.errors}>*该题为必做题</p>
);

/**
 * 渲染每个习题的选项
 * @param {TaskTestSchema} test 习题item
 * @param register 注册表单项
 * @param errors 表单项的验证
 */
const generateOptions = (test: TaskTestSchema, register: any, errors: any) => {

  const _itemName = `opts-${test.order}`;

  switch(test.type) {
  // 单选
  case 'radio':
    return (
      <div className={styles.optsBoxer}>
        {
          test.options?.map((item: TaskTestSchemaOptions) => (
            <div key={`testitem-${item.order}`} className={styles.optItemBoxer}>
              <span>
                <input
                  type="radio"
                  id={`radio-${test.order}-${item.order}`}
                  name={_itemName}
                  value={item.order}
                  ref={register({ required: !test.optional })}
                />
              </span>
              <label htmlFor={`radio-${test.order}-${item.order}`} className={styles.optLabel}>
                {
                  item.type === 'img' ?
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span>{`${TEST_OPTIONS_PREFIX[item.order]}.\u00A0\u00A0`}</span>
                      <img src={item.image} alt={`选项${item.order+1}`} />
                    </div> :
                    <span>{`${TEST_OPTIONS_PREFIX[item.order]}.\u00A0\u00A0${item.content}`}</span>
                }
              </label>
            </div>
          ))
        }
        {errors[_itemName] && <Errors />}
      </div>
    );
    // 判断
  case 'tof':
    return (
      <div className={styles.optsBoxer}>
        {
          test.options?.map((item: TaskTestSchemaOptions) => (
            <div key={`testitem-${item.order}`} className={styles.optItemBoxer}>
              <span>
                <input
                  type="radio"
                  id={`radio-${test.order}-${item.order}`}
                  name={_itemName}
                  value={item.order}
                  ref={register({ required: !test.optional })}
                />
              </span>
              <label htmlFor={`radio-${test.order}-${item.order}`} className={styles.optLabel}>{item.content}</label>
            </div>
          ))
        }
        {errors[_itemName] && <Errors />}
      </div>
    );
    // 填空
  case 'bf':
    return (
      <div className={styles.optsBoxer}>
        <input
          type="text"
          name={_itemName}
          ref={register({ required: !test.optional })}
        />
        {errors[_itemName] && <Errors />}
      </div>
    )
  default:
    return '';
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InternalRenderer: React.ForwardRefRenderFunction<unknown, TestRendererPropTypes> = (props: TestRendererPropTypes, _ref: any) => {

  const { register, handleSubmit, errors } = useForm<Inputs>();
  
  useImperativeHandle(props.render, () => ({
    submit: () => {
      handleSubmit(data => {
        const _dataArr = Object.values(data);
        const _answers = props.schemas.map((_test: TaskTestSchema, index: number) => {
          const _answer:AnswerItemType = {
            type: 'options',
            content: _dataArr[index],
          };
          if (_dataArr[index] === '') _answer.type = null;
          if (_test.type === 'bf') _answer.type = 'text';
          return _answer;
        });
        props.onSubmit?.(_answers);
      })();
    },
  }));
  
  return (
    <div className={styles.container}>
      <form>
        {
          props.schemas.map((item: TaskTestSchema) => (
            <div key={`test-${item.order}`} className={styles.itemBoxer}>
              <div className={styles.h1}>
                {item.optional ? '' : (<span style={{color: 'red'}}>*</span>)}
                {`  ${item.order+1}. (${getTestType(item.type)})`}
                <div dangerouslySetInnerHTML={{ __html: item.title }}></div>
              </div>
              <div>{generateOptions(item, register, errors)}</div>
            </div>
          ))
        }
      </form>
    </div>
  );
};

const TestRenderer = React.forwardRef<any, TestRendererPropTypes>(InternalRenderer);

export default TestRenderer;
