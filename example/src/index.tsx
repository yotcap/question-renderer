import React, { useCallback } from 'react';
import { render } from 'react-dom';
// import Renderer from '../../dist';
import Renderer from '../../src/Renderer';
import { RenderRef, AnswerItemType } from '../../src/types';
import { MOCK_SCHEMA } from './mock';

const App: React.SFC = () => {

  const renderer = React.createRef<RenderRef>();

  const handleSubmit = useCallback((answers: AnswerItemType[]) => {
    console.log('answers:::', answers);
  }, []);

  return (
    <div>
      <Renderer
        render={renderer}
        schemas={MOCK_SCHEMA}
        onSubmit={handleSubmit}
      />
      <button onClick={() => {
        renderer.current.submit();
      }}>提交</button>
    </div>
  );
  
};

render(<App />, document.querySelector('#app'));
