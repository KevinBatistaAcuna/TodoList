import { paste } from '@testing-library/user-event/dist/paste';
import React from 'react';
import { TodoProvider } from '../Components/TodoContext';
import { AppUi } from './AppUi';

function App() {

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
