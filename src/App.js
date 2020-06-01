
import React, { useState, useEffect } from 'react';
import "./App.css";
import Button from './components/Button';
import UserList from './components/UserList';
import UserData from './components/UserData';

function issueDataRequest(anEndpoint,aCallback){
    fetch(anEndpoint).then(res=>{
        if (!res.ok) {throw new Error(`HTTP ${res.status} - ${res.statusText}`)}
        else {return res.json()}})
    .then(data=>aCallback(undefined,data))
    .catch(anError=>aCallback(anError));
};

export default function App() {
    const [requestError,setRequestError]=useState(false);
    const [isLoading,setIsLoading]=useState(true);
    const [selectedUser,setSelectedUser]=useState(undefined);
    const [userList,setUserList]=useState([]);
    const fetchData=()=>{
        const setResult=(anError,aResult,loading=false)=>{
            setRequestError(anError);
            setUserList(aResult);
            setIsLoading(loading);
            setSelectedUser((aResult?aResult[0]:undefined));
        };
        setResult(false,undefined,true);
        issueDataRequest('https://randomuser.me/api/?results=5',(argError,argData)=>{
            if (argError) {setResult(true,argError)}
            else {setResult(false,argData.results)};
        });
    };
    useEffect(()=>{fetchData()},[]);
    return <div className="cls_container">
        <Button handleClick={fetchData} />
        <UserList   list={userList}         requestError={requestError}
                    isLoading={isLoading}   userSelect={setSelectedUser} />
        {selectedUser?<UserData user={selectedUser} />:null}
    </div>;
}


;

