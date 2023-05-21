import React from "react";
import moment from 'moment';

export default function NameListItems(props){
    return(
        <>
        
            <li className="list-group-item">
                <div className="row align-items-center">
                    <div className="col-2">
                    <img className="border dark rounded-circle shadow-sm" src= {props.avatar} alt={props.name}/>
                    </div>
                    <div className="col-10">
                    <h4>{props.name} </h4>
                    <p> {props.city} | {props.email} </p>
                    <small>{moment(props.birthday).format('DD-MM-YYYY')}</small>
                    </div>
                </div>
               
               
                </li>

        
        </>
    )
}