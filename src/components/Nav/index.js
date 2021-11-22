import React, { useState, useEffect } from 'react';
import { 
    Link,
    BrowserRouter,
    Route,
    useHistory
 } from 'react-router-dom';

import PrimeiraPagina from '../../pages/PrimeiraPagina';
import SegundaPagina from '../../pages/SegundaPagina';
import TerceiraPagina from '../../pages/TerceiraPagina';

import AdicionarPrimeiraPagina from '../../pages/Adicionar/PrimeiraPagina';
import AdicionarSegundaPagina from '../../pages/Adicionar/SegundaPagina';
import AdicionarTerceiraPagina from '../../pages/Adicionar/TerceiraPagina';

import EditarPrimeiraPagina from '../../pages/Editar/PrimeiraPagina';
import EditarSegundaPagina from '../../pages/Editar/SegundaPagina';
import EditarTerceiraPagina from '../../pages/Editar/TerceiraPagina';

import {
    MdVideogameAsset,
    MdFolder,
    FiLogOut,
    BsCardText,
} from '../../Icons';

import LogoImage from '../../assets/images/icon.png';

import './styles.css';

export default function Nav() {

    const history = useHistory()
    const [menuOpen, setMenuOpen] = useState(false);
    const [displayNavlink, setDisplayNavlink] = useState('none');
    const [ navItens, setNavItens ] = useState([]);

    function handleNavbar(e) {
        e.preventDefault();
        const btnMenu = document.getElementById('btn-menu');
        const navbar = document.getElementById('navbar-small');
        const contentNavbar = document.getElementById('content-navigation-small');
        
        if(!menuOpen) {
            btnMenu.classList.add('open');
            navbar.style.width = '100%';
            navbar.style.paddingTop = '40px';

            contentNavbar.style.display = "block";
            contentNavbar.style.width = '220px';
            
            setDisplayNavlink('flex')
            setMenuOpen(true);
        } else {
            btnMenu.classList.remove('open');
            navbar.style.width = 0;
            navbar.style.padding = 0;

            contentNavbar.style.display = "none";
            contentNavbar.style.width = 0;

            setDisplayNavlink('none')
            setMenuOpen(false);
        }
    }

    function handleClick(el) {
        navItens.forEach(function (item) {
            item.classList.remove('is-active');
        });

        el.target.classList.add('is-active');


    }

    function handleLogout(e) {
        e.preventDefault();
        history.push('/');
    }

    useEffect(() => {
        const navItensHTML = document.querySelectorAll('.nav-link');
        setNavItens(navItensHTML);
    }, []);

    return(
        <>
            < BrowserRouter>
                <div id="navigation-large">
                    <div className="nav-header">
                        <img src={LogoImage} alt="Imagem da área administraviva representada por uma engrenagem."/>
                        <h1>Área Administrativa</h1>
                        <p>Template para sites</p>
                    </div>
                    <nav className="navbar">
                        <p className="nav-link" style={{ display: "none"}}></p>
                        <Link to='/area-administrativa/primeira-pagina' className="nav-link is-active" onClick={e => handleClick(e)}>
                            <span><MdVideogameAsset /></span>
                            Pagina #01
                        </Link>
                        <Link to="/area-administrativa/segunda-pagina" className="nav-link" onClick={e => handleClick(e)}>
                            <span><MdFolder /></span>
                            Pagina #02
                        </Link>
                        <Link to="/area-administrativa/terceira-pagina" className="nav-link" onClick={e => handleClick(e)}>
                            <span><BsCardText/></span>
                            Pagina #03
                        </Link>
                    </nav>
                    <div className="nav-footer">
                        <button onClick={handleLogout} className="nav-link btn-logout">
                            <span><FiLogOut /></span>
                            Sair
                        </button>
                    </div>
                </div>
                {/* ----- Menu Hamburger -----  */}
                <div id="navigation-small">
                    <div className="nav-header" id="btn-menu">
                        <div 
                            className="btn-menu"
                            onClick={ e => handleNavbar(e)}
                        ></div>
                        <div className="title">
                            <img src={LogoImage} alt="Imagem da área administraviva representada por uma engrenagem."/>
                            <h1>Área Administrativa</h1>
                        </div>
                    </div>
                    <div className="content" id="content-navigation-small">
                        <nav className="navbar" id="navbar-small">
                            <p className="nav-link" style={{ display: "none"}}></p>
                            <Link to="/area-administrativa/primeira-pagina" className="nav-link is-active" style={ { display: displayNavlink }} onClick={e => handleClick(e)}>
                                <span><MdVideogameAsset /></span>
                                Pagina #01
                            </Link>
                            <Link to="/area-administrativa/segunda-pagina" className="nav-link" style={ { display: displayNavlink }} onClick={e => handleClick(e)}>
                                <span><MdFolder /></span>
                                Pagina #02
                            </Link>
                            <Link to="/area-administrativa/terceira-pagina" className="nav-link" style={ { display: displayNavlink }} onClick={e => handleClick(e)}>
                                <span><BsCardText/></span>
                                Pagina #03
                            </Link>
                            <button 
                                onClick={handleLogout} 
                                className="nav-link btn-logout" 
                                style={ { display: displayNavlink }}
                            >
                                <span><FiLogOut /></span>
                                Sair
                            </button>
                        </nav>
                    </div>
                </div>
                <div className="content">

                    <Route path="/area-administrativa/primeira-pagina" component={PrimeiraPagina}/>
                    <Route path="/area-administrativa/segunda-pagina" component={SegundaPagina}/>
                    <Route path="/area-administrativa/terceira-pagina" component={TerceiraPagina}/>

                    <Route path="/adicionar-primeira-pagina" component={AdicionarPrimeiraPagina}/>
                    <Route path="/adicionar-segunda-pagina" component={AdicionarSegundaPagina}/>
                    <Route path="/adicionar-terceira-pagina" component={AdicionarTerceiraPagina}/>
                    
                    <Route path="/editar-primeira-pagina" component={EditarPrimeiraPagina}/>
                    <Route path="/editar-segunda-pagina" component={EditarSegundaPagina}/>
                    <Route path="/editar-terceira-pagina" component={EditarTerceiraPagina}/>
                    
                </div>
            </ BrowserRouter>
        </>
    )
}