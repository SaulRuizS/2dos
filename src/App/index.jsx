import { AppUI } from './AppUI';
import { TwoDoProvider } from '../Components/TwoDoContext';

import React from 'react';

function App() {

  //---------------------------------------------------
  //  THIS IS JUST AN EXAMPLE OF "useEffect" REACT HOOK
  //+++++++++++++++++++++++++++++++++++++++++++++++++++
  //   console.log('useEffect has not been activated');

  //   React.useEffect(() => {
  //     console.log('useEffect is activated');
  //   }, [total2DOs]);

  //   console.log('useEffect already activated');
  //----------------------------------------------------

  return (
      <TwoDoProvider>
        <AppUI />
      </TwoDoProvider>
    );
}

export default App;


// const defaultTodos = [
//   { text: '1 TODO',completed: false,},
//   { text: '2 TODO',completed: false,},
//   { text: '3 TODO',completed: false,},
//   { text: '4 TODO',completed: false,},
//   { text: '5 TODO',completed: false,},
//   { text: '6 TODO',completed: false,},
//   { text: '7 TODO',completed: false,},
//   { text: '8 TODO',completed: false,},
//   { text: '9 TODO',completed: false,},
//   { text: '10 TODO',completed: false,},
//   { text: '11 TODO',completed: false,},
//   { text: '12 TODO',completed: false,},
//   { text: '13 TODO',completed: false,},
//   { text: '14 TODO',completed: false,},
//   { text: '15 TODO',completed: false,},
//   { text: 'n TODO',completed: false,},
// ]