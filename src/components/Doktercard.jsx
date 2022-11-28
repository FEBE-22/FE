import React, { useState, useEffect } from 'react';
import './doktercard.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Doktercard() {
  const [posts, setPosts] = useState ([]);
  const [input, setInput] = useState ('')
  const [output, setOutput] = useState ([])
  useEffect(() => {
    axios.get('https://6354e3f4da523ceadcf5c060.mockapi.io/lists')
    .then ((response) => {
      setPosts(response.data)
    })
  }, [])

  useEffect (() => { 
    setOutput(
      posts.filter((post) => post.name.toLowerCase().includes(input.toLowerCase()))
    )
  }, [input, posts])
  return (
    <div>
      {/* search bar */}
    <form className="container-fluid" />

      <div className="input-group">
          <span className="input-group-text">Cari</span>
          <input className="form-control me-2" type="text" onChange={(e)=> setInput(e.target.value)} placeholder="search..." />
      </div>

      <h3>Rekomendasi Dokter</h3>
      <p>Konsultasi online bersama dokter siaga</p>

      {output.map((item) => {
            return <div key={item.id}>
              <div className='cardWrapper'>
                <img src={item.image} alt='dokter' />
                <div className='cardContent'>
                  <h5 className='cardTitle'>{item.name}</h5>
                  <p className='cardBody'>{item.spesialis}</p>
                  <p className='cardText'>{item.tahun}</p>
                  <button className="btn btn-primary me-md-2" type="button">
                    <Link to={`/chat/${item.name}`} className="next"> 
                    Chat 
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          })}
    </div>
  )
}

export default Doktercard;
