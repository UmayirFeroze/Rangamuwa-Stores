import ActionButtons from './components/ActionButtons';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  let items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris'];

  const screen = {title: 'Buyers', subtile:'Manage buyer details'}

  return (
    <div>
      {/* <ListGroup items={items} heading='Cities' onSelectItem={(item: string) => { console.log(item); }} /> */}

      {/* <Alert> Hello <span>World!</span> </Alert> */}

      {/* <Button onClick={() => console.log('Clicked!')}>My Button</Button> */}
      <Navigation />

      <ActionButtons/>

      {/* Main content container */}
      <main className="flex-1 p-4 ">

        {/* Header */}
        <div className="mx-auto bg-gray-100 border p-3">
          <h1 className="text-2xl font-bold">{screen && screen.title}</h1>
          <p>{screen && screen.subtile}</p>
        </div>

        <div className='bg-gray-100 border p-2'>
          <h1>Content</h1>
        </div>
        
      </main>


      <Footer/>
    </div>
  );
}

export default App;
