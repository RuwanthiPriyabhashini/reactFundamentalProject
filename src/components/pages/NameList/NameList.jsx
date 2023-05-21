import React from "react";
import NameListItems from "./NameListItems";
import {useState} from 'react';
import {useEffect} from 'react';

export default function NameList(){

    const [loadData , setloadData] =useState(new Date());
    const [nameList , setNameList] = useState ([
        {
            id: 1,
        name: {
            title: "Miss",
            first: "Jennie",
            last: "Nichols"
          }, 
          location: {
            city: "Billings",
            },
            email: "jennie.nichols@example.com",
            dob: {
                "date": "1992-03-08T15:13:16.688Z",
                "age": 30
              },
              picture: {
                medium: "https://randomuser.me/api/portraits/med/women/56.jpg",
                }           
    },
    {
        id :2,
        name:{
            title:"Mr",
            first:"Marcus",
            last:"Boyd"
        },
        location:{
            city:"Ennis"
        },
        email:"marcus.boyd@example.com",
        dob:{
            date:"1945-01-22T13:48:15.344Z",
            age:78
        },
        picture:{
            medium:"https://randomuser.me/api/portraits/med/men/74.jpg"
        }
    },
    {
        id:3,
        name:{
            title:"Mr",
            first:"Önal",
            last:"Kunter"
        },
        location:{
        city:"Kütahya"
        },
        email:"onal.kunter@example.com",
        dob:{"date":"1981-05-08T02:23:03.835Z",
        age:42
    },
    picture:{
        medium:"https://randomuser.me/api/portraits/med/men/40.jpg"
    },
    },
] );


useEffect(() => {
    fetch('https://randomuser.me/api').then((response) =>{
        return response.json();
    }).then((responseData) => {
        setNameList((nameList) =>[...nameList ,responseData.results[0]]);
    });
},[loadData]);



const afterBtnClicked = () => {
    setloadData(new Date());
}



const nameListComponents =() =>{
    return nameList.map((aName) => { 
        return (
            <NameListItems
            key ={aName.id}
    name = {`${aName.name.first} ${aName.name.last}`}
    city={aName.location.city}
    email ={aName.email}
    birthday={aName.dob.date}
    avatar={aName.picture.medium}
    />
        )
    })
}

    return(
        <>
        <div className="container mt-4 shadow-sm">
        <button className="btn btn-primary " onClick={afterBtnClicked}> Add New</button>
        <ul className="list-group">
            {nameListComponents()}        
        </ul>

        </div>
        

        </>
    )
}

