import React, { useState } from 'react';
import InputSelect from './Select';
import AddNewButton from './AddNewButton';
import InputString from './InputString';
import InputButton from './InputButton';
import DownloadButton from './DownloadButton';
import CsvDownloadButton from 'react-json-to-csv'
import Auth from '../config/auth';

import { JsonView, allExpanded, darkStyles, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

function Add() {

  let [noOfCopy, setNoOfCopy] = useState(0)
  let [arr, setArr] = useState([{ idx: 0 }])
  let [data, setData] = useState([{ idx: 0, option: null }])
  let [jsonResponse, setJsonResponse] = useState(null)
  let fillArrData = (idx, value) => {
    setData((data) =>
      data.map((item, index) =>
        index === idx ? { ...item, option: value } : item
      )
    );

  }
  const handleAddButtonClick = () => {
    setArr(arr = [...arr, { idx: arr.length }])
    setData(data = [...data, { idx: data.length, option: null }])
  };


  let handleSubmit = async (event) => {
    event.preventDefault()
    if (noOfCopy == 0) {
      alert("Add No of Copy to generate the data")
      return
    }
    let modifiedData = []
    data.map((_, e) => {
      modifiedData.push(data[e].option)
    })

    let requestes = new Auth("/api/v1/data", "post", noOfCopy, modifiedData)
    let res = await requestes.fetchData()
    setJsonResponse(jsonResponse = res)
    console.log("add.jsx", res)
  }
  return (
    <div >
      <form>
        {
          arr.map((e, index) => {
            if (index === arr.length - 1) {
              return (
                <div key={index} className='h-20 w-full flex justify-center items-center ml-6'>
                  <InputSelect
                    name={String(index)} onChange={(e) => { let idx = Number(e.target.name); fillArrData(idx, e.target.value) }} />
                  <AddNewButton onClick={handleAddButtonClick} />
                </div>
              )
            }
            else {
              return (
                <div key={index} className='h-20 w-full flex justify-center items-center'>
                  <InputSelect name={String(index)} onChange={(e) => { let idx = Number(e.target.name); fillArrData(idx, e.target.value) }} />
                </div>
              )
            }

          })
        }
        <div className='h-20 w-full flex justify-center items-center'>
          <InputString onChange={(e) => { let val = e.target.value; setNoOfCopy(noOfCopy = val) }} />
          <InputButton onClick={handleSubmit} />
        </div>
      </form>
      <div className=' mt-10 flex justify-end items-end' >
        <div className={jsonResponse !==null ? 'h-12 w-36 bg-sky-700 mr-4 pl-3 rounded-md flex justify-centre items-centre':""}>
          {jsonResponse !== null && <CsvDownloadButton data={jsonResponse.data} />}
        </div>
      </div>
      <div className='w-full flex justify-center items-center ' >
        <div className=''>
          {
            jsonResponse !== null && <JsonView data={jsonResponse.data} shouldExpandNode={allExpanded} style={darkStyles} />
          }
        </div>
      </div>
    </div>
  );
}

export default Add;



