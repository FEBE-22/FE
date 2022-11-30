import React from 'react'
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <div className='row justify-content-center mt-5 w-auto'>
        <div className='col-10'>
            <div className='row w-auto'>
                <div className='col g-0'>
                    <form className='row justify-content-center'>
                        <button className='col-9 col-md-1 order-2 order-md-1 btn-3'>Cari</button>
                        <div className='col-9 col-md-11 order-1 order-md-2'>
                            <div className='row search-input-wrapper w-auto'>
                                <input type="text" name='search' placeholder='Cari Dokter' className='col-10 col-md-11 search-input'/>
                                <div className='col-2 col-md-1 bg-white text-center align-self-center'>
                                    <BsSearch className='search-icon' size={'100%'}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search