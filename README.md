# laputa-renderer
习题渲染器

## 安装
yarn
> yarn add laputa-renderer

npm
> npm i laputa-renderer

## 使用
只展示
```js
/**
 * 只渲染
 */
import React from 'react';
import Renderer from 'lapuata-renderer';

const App: React.SFC<{}> = () => (
  <div>
    <Renderer schemas={MOCK_SCHEMA} />
  </div>
);
```
可提交答案
```js
/**
 * 可提交
 */
import React, { useCallback } from 'react';
import Renderer from 'laputa-renderer';
import { RenderRef, AnswerItemType } from 'laputa-renderer/dist/types';

const App: React.SFC<{}> = () => {

  const renderer = React.createRef<RenderRef>();

  const handleSubmit = useCallback((answers: AnswerItemType[]) => {
    console.log('answers:::', answers);
  }, []);

  return (
    <div>
      <Renderer
        renderer={renderer}
        schemas={MOCK_SCHEMA}
        onSubmit={handleSubmit}
      />
      <button onClick={() => renderer.current.submit()}>提交</button>
    </div>
  )
}
```
