import React from 'react';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function AdicionarSegundaPagina() {

    const history = useHistory();
    const options = []

    options.push({ value: 'op1', label: 'Opção 01' });
    options.push({ value: 'op2', label: 'Opção 02' });
    options.push({ value: 'op3', label: 'Opção 03' });

    function onSelectedOption(e) {
        console.log(e.value)
    }

    function handleConfirm(e) {
        history.push('/area-administrativa/segunda-pagina')
    }

    return(
        <div className="container">
            <main className="pagina" id="adicionar-video">
                <div id="header-adicionar">
                    <h1 className="adicionar-title">Adicionar novo item</h1>
                </div>
                <form className="form-default">
                    <h4>Adicione um novo item ao site através deste formulario</h4>
                    <Select 
                        options={options} 
                        onChange={onSelectedOption}
                    />
                    <label htmlFor="file">Arquivo PDF referente ao xxxxxx</label>
                    <input 
                        type="file"
                        id="file"
                        accept=".pdf" 
                        onChange={ event => {
                            const file = event.target.files[0];
                            console.log(file);
                        }}
                    />       
                    <div className="adicionar-acoes">
                        <button onClick={e => history.push('/area-administrativa/segunda-pagina')}>Cancelar</button>
                        <button onClick={e =>  handleConfirm(e)} >Confirmar</button>
                    </div>
                </form>
            </main>
        </div>
    )
}