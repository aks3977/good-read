import React from 'react';

function Pagination({recordsPerPage, totalRecords, paginate}) {
    let pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalRecords/recordsPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination mt-5'>
                {pageNumbers.map((number)=>(
                    <li key={number} className="page-item">
                        <a onClick={()=> paginate(number)} href="javascript:void(0)" className='page-link' style={{fontSize:"2rem",marginLeft:"0.5rem"}}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;