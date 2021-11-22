import React, { useState } from 'react';
import Dropzone from '../../../components/Dropzone';
import { Editor } from '@tinymce/tinymce-react'; 
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function AdicionarPrimeiraPagina() {

    const history = useHistory();

    const [ textEditor, setTextEditor ] = useState('');
    const [ imageUpload, setImageUpload ] = useState();

    function handleEditorChange(content, editor)  {
        setTextEditor(content);
    }

    function handleConfirm(e) {
        setImageUpload (imageUpload);
        history.push('/area-administrativa/primeira-pagina')
    }

    return(
        <div className="container">
            <main className="pagina" id="adicionar-item-um">
                <div id="header-adicionar">
                    <h1 className="adicionar-title">Adicionar novo item</h1>
                </div>
                <form className="form-default">
                    <h4>Adicione um novo item ao site através deste formulario</h4>
                    <label htmlFor="item-um-titulo">Título</label>
                    <input type="text" name="item-um-titulo" className="input-default" required/>
                    <label>Descrição</label>
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
                                    'advlist autolink lists', 
                                    'charmap print preview anchor help',
                                    'searchreplace visualblocks code',
                                    'insertdatetime media table paste wordcount'
                                ],
                                toolbar:
                                    `undo redo | formatselect | bold italic | \
                                    alignleft aligncenter alignright | \
                                    bullist numlist outdent indent | help`
                            }}
                            value={textEditor}
                            onEditorChange={handleEditorChange}
                        />
                    </div>
                    <Dropzone titleDropzone={'Imagem para upload'} onFileUploaded={imageUpload}/>
                    <div className="adicionar-acoes">
                        <button onClick={e => history.push('/area-administrativa/primeira-pagina')}>Cancelar</button>
                        <button onClick={e =>  handleConfirm(e)}>Confirmar</button>
                    </div>
                </form>
            </main>
        </div>
    )
}