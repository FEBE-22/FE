import React, { useState, useEffect } from 'react';
import './doktercard.css';
import axios from 'axios';

function DokterCard() {
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
    <>
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
                <div className="card d-inline-flex">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={item.image} className="img-fluid mt-3" alt="/dokter" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.spesialis}</p>
                                <p className="card-text"> {item.tahun}</p>
                                <button className="btn btn-primary" type="button">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })}
    </>
  )
}

export default DokterCard
