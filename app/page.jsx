"use client";
import React, { useState, useEffect } from "react";

export default function page() {

  const [apiResponse, setApiResponse] = useState([]);
  const [entryApi, setEntryApi] = useState({ api: "test" });
  const [counter, setCounter] = useState(0);

  const [currentId, setCurrentId] = useState(0);

  // states for form
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  // state for storing form data --> woking with forms
  const [employees, setEmployees] = useState([]);

  
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  useEffect(() => {
    console.log("Current employees: ");
    console.log(employees);
    
    setCounter(employees.length);


    console.log(employees.length);
  }, [employees]);

  // whenever second param chnges useEffect is called
  // empty array --> useEffect gets only called once

  async function makeApiCall() {
    await fetch("/api/employee", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setApiResponse(data);
        console.log(data);
        console.log("API called successfully...");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function unsetItems() {
    setApiResponse([]);
  }

  const countUp = () => {
    let currentrCount = counter + 1;
    console.log(currentrCount);
    setCounter(currentrCount);
  };

  const countDown = () => {
    let currentrCount = counter - 1;
    setCounter(currentrCount);
  };

  const resetCount = () => {
    let currentrCount = 0;
    setCounter(currentrCount);
  };

  const addValue = () => {
    const emplopyee = {
      name: name,
      lastName: lastName,
      age: age,
    };

    /*
    const array1 = [1, 2, 3];
  	const array2 = [...array1, 4, 5]; 
    array2 will be [1, 2, 3, 4, 5]
    */

    const tempEmployees = [...employees];
    tempEmployees.push(emplopyee);

    setEmployees(tempEmployees);
    console.log(employees);
  };

  const removeValue = (idx) => {
    const tempEmployees = [...employees];
    tempEmployees.splice(idx, 1);
    setEmployees(tempEmployees);
    console.log(employees);
  };

  const updateStates = (idx) => {
    const tempEmployees = [...employees];
    // update values
    setName(tempEmployees[idx].name)
    setLastName(tempEmployees[idx].lastName)
    setAge(tempEmployees[idx].age)

    setCurrentId(idx);
  };

  const updateValue = () => {
    const tempEmployees = [...employees];
    // update values
    tempEmployees[currentId].name = name;
    tempEmployees[currentId].lastName = lastName;
    tempEmployees[currentId].age = age;

    setEmployees(tempEmployees);
  };


  return (
    <div>
      <form className="m-5">
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>Last name: </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        <label>Age: </label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br />
        <br />
        <div
          onClick={() => addValue()}
          className="bg-sky-500 text-white p-1 font-black"
        >
          Add employee
        </div>
        <br />
        <div
          onClick={() => updateValue()}
          className="bg-sky-500 text-white p-1 font-black"
        >
          Update employee
        </div>
      </form>

      <div>
        {employees.length > 0
          ? employees.map((iterator, index) => (
              <div key={index} onClick={() => updateStates(index)}>
                <div className="p-4">
                  <div>{iterator.name}</div>
                  <div>{iterator.lastName}</div>
                  <div>{iterator.age}</div>
                </div>
                <div
                  className="font-black text-2xl text-center"
                  onClick={() => removeValue(index)}
                >
                  x [{index}]
                </div>
              </div>
            ))
          : "currently no items are available"}
      </div>

      <div className="text-4xl font-black">{counter}</div>
      <button onClick={makeApiCall}>Make api-call</button>
      <br />
      <button onClick={unsetItems}>Reset api-call</button>
      <br />
      <button onClick={countUp}>Count up</button>
      <br />
      <button onClick={countDown}>Count down</button>
      <br />
      <button onClick={resetCount}>Reset count</button>

      <div className="text-4xl font-black">
        ENTRY API: {entryApi == "test" ? "error" : entryApi.api}
      </div>

      {apiResponse.length > 0 ? (
        <div>
          <h2>API Response (MAP):</h2>
          <ul>
            {apiResponse.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
