import React, { useState } from 'react';
import useFetch from '../useFetch/useFetch';

const AnotherCountries = () => {
  const [inputValue, setInputValue] = useState('/');
  console.log(inputValue)

  const handleInputChange = (event) => {
    const value = event.target.value; 
    setInputValue(value);

  };
  const url = `http://universities.hipolabs.com/search?country=${inputValue}`
  console.log(url)

  const {data,loading,error} = useFetch(url)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const mappedData = data.map((university) =>(
    <div>
    <h2 key={university.id} style={{color:'red'}}>
     {university.name}</h2>
    <h4>Web Page : {university.web_pages[0]}</h4>
    <h4>Domain : <a href={'http://' + university.domains}>{university.domains}</a></h4>

    <button>
        Click for more info
        </button>
    </div>

  ))

  

  return (
    <div>
      <div>AnotherCountries</div>
      <input
        type="text"
        placeholder="Type here the country"
        value={inputValue}
        onChange={handleInputChange}
      />
      {mappedData}
    </div>
  );
};

export default AnotherCountries;
