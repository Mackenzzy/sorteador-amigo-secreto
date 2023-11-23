import React from "react";
import { render, screen } from "@testing-library/react";

//Jest 

test('Quando o input estiver vazio, novos participantes não podem ser adicionados', () => {

    render (<Formulario />)

    //encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    //encontrar o botão pela função
    const botao = screen.getByRole('button')

    //esperar q o input esteja no documento
    expect(input).toBeInTheDocument()

    //esperar q o botão esteja no documento
    expect(botao).toBeInTheDocument()
}

)