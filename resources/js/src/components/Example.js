import React from 'react';
// 接收到LoginContainer的props變數跟function綁上Component
const Example = ({ string, int, array, object }) => {
  console.log(array)
  // const { string, int, array, object } = state;
  return (
    <section>
      <h3>Example</h3>
      {/* <button onClick={}></button> */}
      <div>string : {string}</div>
      <div>int : {int}</div>
      
      <div>
        array : 
        {
          !array.length ? 'null' :
          array.map((item, index) => {
            return(
              <div key={ index }>
                <div>{ item.text }</div>
                <div>{ JSON.stringify(item.completed) }</div>
                <div>{ item.id }</div>
              </div>
            )
          })
        }
      </div>
      
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