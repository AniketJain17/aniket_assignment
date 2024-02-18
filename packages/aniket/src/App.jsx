import { mount, useEffect } from './components/demo';

function App() {
    //Mounting the components
    useEffect(() => {
      console.log('Mounted');
    })
    mount();
}

export default App
