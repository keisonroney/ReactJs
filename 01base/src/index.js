// Importar módulos

import React from 'react';
import ReactDom from 'react-dom';

// Estrutura
const estrutura = 
<div>
    <h1>Meu primeiro render</h1>
    <p>Testando...</p>

</div>




// Render
ReactDom.render(
    estrutura,
    document.getElementById('root')
);
