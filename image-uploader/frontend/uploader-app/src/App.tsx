import { useState } from 'react';
import './App.scss';
import ImageResult from './views/imageResult';
import Uploader from './views/uploader';

function App() {
  const [isSuccess, setIsSucess] = useState<boolean | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);

  return (
    <div className="App">
      {isSuccess === undefined && (
        <Uploader resultStatus={setIsSucess} resultMessage={setMessage} />
      )}
      {isSuccess === true && message && message.length > 0 && (
        <ImageResult imageSrc={message} />
      )}
    </div>
  );
}

export default App;
