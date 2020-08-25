import React, { useState } from 'react';

type FormType = {
  getData(path: string): void;
};

const Form: React.FC<FormType> = ({ getData }) => {
  const [fileName, setFileName] = useState<string>('');

  const changeFileName = (event: any) => {
    setFileName(event.target.value);
  };

  return (
    <>
      <div className="form-group">
        <label>The path to the file</label>
        <input type="text" className="form-control" onChange={changeFileName} />
      </div>
      <button className="btn btn-primary" onClick={() => getData(fileName)}>
        Load File
      </button>
      <hr />
    </>
  );
};

export default Form;
