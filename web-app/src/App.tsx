import Alert from './components/Alert';
import Button from './components/Button';
import Footer from './components/Footer';
import ListGroup from './components/ListGroup';
import Navigation from './components/Navigation';
import Message from './Message';

function App() {
  let items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris'];

  return (
    <div>
      {/* <ListGroup items={items} heading='Cities' onSelectItem={(item: string) => { console.log(item); }} /> */}

      {/* <Alert> Hello <span>World!</span> </Alert> */}

      {/* <Button onClick={() => console.log('Clicked!')}>My Button</Button> */}
      <Navigation />

      {/* Main content container */}
      <main className="flex-1 p-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          {/* Replace this with your actual content */}
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>This section expands to fill space between header and footer.</p>
        </div>
      </main>


      <Footer/>
    </div>
  );
}

export default App;
