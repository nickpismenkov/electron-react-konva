import React, { useState } from 'react';
import Form from './components/Form';
import Canvas from './components/Canvas';

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);

  const getData = (path: string): void => {
    (async () => {
      const data = await (
        await fetch(`http://localhost:5000/get_data?file=${path}`)
      ).json();

      setData(data);
    })();
  };

  return (
    <div className="container mt-5">
      <Form getData={getData} />
      <div className="row justify-content-center">
        <Canvas data={data} />
      </div>
    </div>
  );
};

export default App;
