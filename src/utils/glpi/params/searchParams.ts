// Define os tipos para os parâmetros de busca
interface SearchParams {
    [key: string]: string | number;
}

// Função para criar o payload de fechamento
export const newStatusParam = (): SearchParams => ({
    'criteria[1][field]': 12, // Campo status do chamado
    'criteria[1][searchtype]': 'equals',
    'criteria[1][value]': 1, // 1 = Novo
});

// Função para criar o payload de fechamento
export const validateParams = (): SearchParams => ({
    'criteria[1][link]': 'AND',
    'criteria[0][field]': 55, // Campo status da aprovação
    'criteria[0][searchtype]': 'equals',
    'criteria[0][value]': 3, // 3 = Aprovado
});

// Função para filtrar ticket a partir do ID
export const searchTicketParams = (id: number): SearchParams => ({
    'criteria[0][field]': 2,  // Campo ID do ticket
    'criteria[0][searchtype]': 'equals',
    'criteria[0][value]': id, // ID do ticket
});


export const orderParams = (): SearchParams => ({
    sort: 1,
    order: 'ASC',
    range: '0-49',
});

export const criarOpParams = (): SearchParams => ({
    'criteria[2][link]': 'AND',
    'criteria[2][field]': 7, // Campo Modelo ITIL no chamado
    'criteria[2][searchtype]': 'contains',
    'criteria[2][value]': 'Automações > GLPI x SAP > Produção > Abertura de Ordem de Produção', // Valor do campo Modelo ITIL
});

export const ieParams = (): SearchParams => ({
    'criteria[2][link]': 'AND',
    'criteria[2][field]': 7, // Campo Modelo ITIL no chamado
    'criteria[2][searchtype]': 'contains',
    'criteria[2][value]': 'Automações > GLPI x SAP > Comercial > Cadastro de Clientes > Alterar Inscrição Estadual', // Valor do campo Modelo ITIL
});

export const estornaOpParams = (): SearchParams => ({
    'criteria[2][link]': 'AND',
    'criteria[2][field]': 7, // Campo Modelo ITIL no chamado
    'criteria[2][searchtype]': 'contains',
    'criteria[2][value]': 'Automações > GLPI x SAP > Produção > Estorno de Ordem de Produção', // Valor do campo Modelo ITIL
});

export const modRegInfoParams = (): SearchParams => ({
    'criteria[2][link]': 'AND',
    'criteria[2][field]': 7, // Campo Modelo ITIL no chamado
    'criteria[2][searchtype]': 'contains',
    'criteria[2][value]': 'Modificar Registro Info', // Valor do campo Modelo ITIL
});

export const pendingValidationParams = (): SearchParams => ({
    'criteria[0][field]': 55, // Campo status da aprovação
    'criteria[0][searchtype]': 'equals',
    'criteria[0][value]': 2, // 2 = Pendente de validação
    'criteria[1][link]': 'AND',
    'criteria[1][field]': 12, // Campo status do chamado
    'criteria[1][searchtype]': 'equals',
    'criteria[1][value]': 1, // 1 = Novo
});

export const getUserParams = (idRequester: number): SearchParams => ({
    'criteria[0][field]': 2, // Campo ID do usuário
    'criteria[0][searchtype]': 'equals', // Tipo de busca: igual
    'criteria[0][value]': idRequester, // ID do usuário a ser buscado
    'criteria[1][link]': 'AND',
    'criteria[1][field]': 8, // Campo que informa se o usuário está ativo
    'criteria[1][searchtype]': 'equals',
    'criteria[1][value]': 1, // 1 = Ativo
    range: '0-0', // Limita o retorno a um único resultado
});

export const testeWPParams = (): SearchParams => ({
    'criteria[2][link]': 'AND',
    'criteria[2][field]': 7, // Campo Modelo ITIL no chamado
    'criteria[2][searchtype]': 'contains',
    'criteria[2][value]': 'Ti - Sistemas > Suporte Interno > Realização de testes > teste parovação', // Valor do campo Modelo ITIL
});
