import React, { useState } from 'react';

import {
    PesquisaCaixaComponente,
} from "./CaixaStyled";

function PesquisaCaixaComponente() {
    const [codigoPDV, setCodigoPDV] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let formData = {
            codigoPDV,
            quantidade,
        };

        console.log(formData); // Exemplo: apenas para mostrar os dados no console
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <i className="bi bi-search"></i>
                    <input
                        type="number"
                        placeholder="Código do produto"
                        required
                        onChange={(e) => setCodigoPDV(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="qtd"
                        id="qtd"
                        placeholder="Quantidade"
                        required
                        onChange={(e) => setQuantidade(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        name="Adicionar Produto"
                        id="adicionar"
                        className="buttons"
                        value={"Adicionar"}
                    />
                </div>
            </form>
        </div>
    );
}

export default PesquisaCaixaComponente;
