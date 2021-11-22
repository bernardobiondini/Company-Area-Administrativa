import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react'; 
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function AdicionarTerceiraPagina() {

    const history = useHistory();
    const [textEditor, setTextEditor] = useState('');

    function handleEditorChange(content, editor)  {
        setTextEditor(content); 
    }

    function handleConfirm(e) {
        history.push('/area-administrativa/terceira-pagina')
    }

    return(
        <div className="container">
            <main className="pagina" id="adicionar-artigo">
                <div id="header-adicionar">
                    <h1 className="adicionar-title">Adicionar novo item</h1>
                </div>
                <form className="form-default">
                    <h4>Adicione um novo item ao site através deste formulario</h4>
                    <label htmlFor="artigo-titulo">Título</label>
                    <input type="text" name="artigo-titulo" className="input-default" required/>
                    <label>Conteúdo</label>
                    <div id="editor-text">
                        <Editor
                            apiKey="zwneh8pmwmhs6aj2k9wyiaaf593qk3bdlydp1zwpvvnkpa45"
                            initialValue="<p>Digite aqui seu texto</p>"
                            id='conteudo-post'
                            init={{
                                resize: false,
                                height: 300,
                                width: '100%',
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image', 
                                    'charmap print preview anchor help',
                                    'searchreplace visualblocks code',
                                    'insertdatetime media table paste wordcount'
                                ],
                                toolbar:
                                    `undo redo | formatselect | bold italic | \
                                    alignleft aligncenter alignright | \
                                    bullist numlist outdent indent | help | link image`
                            }}
                            value={textEditor}
                            onEditorChange={handleEditorChange}
                        />
                    </div>
                    <div className="adicionar-acoes">
                        <button onClick={e => history.push('/area-administrativa/terceira-pagina')} >Cancelar</button>
                        <button onClick={e =>  handleConfirm(e)} >Confirmar</button>
                    </div>
                </form>
            </main>
        </div>
    )
}