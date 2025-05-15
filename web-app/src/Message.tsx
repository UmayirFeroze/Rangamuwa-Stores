import ListGroup from './components/ListGroup';

function Message() {
  const name = 'Mosh';

  if (name)
    // return <h1 className="text-3xl font-bold underline">Hello {name}!</h1>;
    return <ListGroup />;
}

export default Message;
