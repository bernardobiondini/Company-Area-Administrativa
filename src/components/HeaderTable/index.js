import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function HeaderTable(props) {

    const history = useHistory();
    
    function handlePageAdd(e) {
        e.preventDefault();
        history.push(`/${props.page}`);
    }

    return(
        <div id="header-table">
             <h1>{props.titulo}</h1>
            <button 
                className="adicionar"
                onClick={e => handlePageAdd(e)}
            >
                Adicionar<span>+</span>
            </button>
        </div>
    )
}