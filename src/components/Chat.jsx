import { useState } from "react"
import Icon from "react-icons-kit";
import {send} from 'react-icons-kit/fa/send'
import {smallRight} from 'react-icons-kit/entypo/smallRight'
import {ellipsisH} from 'react-icons-kit/fa/ellipsisH'
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import React from 'react'


function Chat() {
    const {id} = useParams();
    let [userChat, setUserchat] = useState('')
    let [msg, setMsg] = useState('')
    let [chat, setChat] = useState([1,2])
    let [dr, setArr] = useState([])
    let [hasilChat, setHasil] = useState([2])
    const value = `${chat}`
    const coba = dr.map((num) => {
        const ss = []
        ss.push(userChat)
        console.log(num.msg)
        return (
            <div className="chat-text-user">{num.msg}</div>
        )
    })
    

    
    const [todos, setTodos] = useState([
        {
          text: "This is a sampe todo",
          isDone: false
        }
      ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };


    function kirim(e) {
        e.preventDefault();

        console.log("berhasil");
        setUserchat(msg)
        setChat(chat+1)
        setArr(current => [...current, {msg}])
        setChat(dr[0])
        console.log(dr)
        setMsg('')
        
       
    }
    function chatText(){
        return(
            <div className="chat-text-user">{userChat}</div>
        )
    }
    

    return(
        <div id="main">
        <div id="wrap-info">
            <div id="info-chat">
                <div id="left-con">
                    <div id="back">
                        <Link to={'/listdokter'}><Icon size={'32'} icon={smallRight} id="back-icon"/></Link>
                    </div>
                    <div id="profile">
                        <ul id="prof">
                            <li>{id}</li>
                        </ul>
                    </div>
                </div>
                <div id="right-con">
                    <Icon size={'20'} icon={ellipsisH} id="more"/>
                </div>
            </div>
        </div>
        <div id="wrap-chat">
            <div id="tempat-chat" >
                <div className="chat-text">Apa Kendala anda?</div>
                {/* {hasilChat.map((element, index) => {
                    return (
                        <div class="chat-text-user">{userChat}</div>
                    );
                })} */}
                {coba}
                
                
            </div>
            <div id="wrap-send">
                <form id="btn-send" onSubmit={kirim}>
                    <input type="text" id="chatbox" name="" value={msg} onChange={(e) => setMsg(e.target.value)}/>
                    <button type="submit" id="kirim" ><Icon icon={send} id="icon-kirim"/></button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Chat