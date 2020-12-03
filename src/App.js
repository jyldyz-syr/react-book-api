import ContactsContextProvider from './context/ContactsContext';
import Routes from './Routes';


function App() {
  return (
    <div>
      <ContactsContextProvider>

        <Routes/>
      
      </ContactsContextProvider>

    </div>

  );
}

export default App;
