import React from 'react';

const Example = ({
  // state
  string, int, array, object,
  // function
  changeArray, changeObject, changeString, changeInt
}) => {
  return (
    <section>
      <h3>Example</h3>

      <button onClick={changeString}>changeString</button>
      <div>string : {string}</div>

      <button onClick={changeInt}>changeInt</button>
      <div>int : {int}</div>

      <button onClick={changeArray}>changeArray</button>
      <div>
        array :
        {
          !array.length ? 'null' :
            array.map((item, index) => {
              return (
                <div key={index}>
                  <div>{item.text}</div>
                  <div>{JSON.stringify(item.completed)}</div>
                  <div>{item.id}</div>
                </div>
              )
            })
        }
      </div>

      <button onClick={changeObject}>changeObject</button>
      <div>
        object :
        {Object.keys(object).map(key => {
        const value = object[key];
        return (
          <div key={key}>{key}: {value}</div>
        );
      })}
      </div>
    </section>
  );
}

export default Example;