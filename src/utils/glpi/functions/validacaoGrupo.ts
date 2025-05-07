import { ValidacaoTicket } from "../../../types/glpi/ieTypes";

export const verificaValidacaoGrupo = (validacoes: ValidacaoTicket[], grupoIdValidacao: number): number => {
    for (const statusPrioridade of [3, 4, 2]) {
        for (const validacao of validacoes) {
            console.log('validacao', validacao);
            console.log('validacao.status', validacao.status);
            console.log('grupoIdValidacao', grupoIdValidacao);

            // Se o status for 2, retorna diretamente sem verificar o grupo
            if (validacao.status === 2 && statusPrioridade === 2) {
                console.log('Status 2 encontrado, retornando sem verificar grupo');
                return 2;
            }

            // Para outros status (3 e 4), verifica o grupo
            if (
                validacao.status === statusPrioridade &&
                validacao.user_validate.groups?.some(groupId => groupId === grupoIdValidacao)
            ) {
                console.log('Condição satisfeita para status', validacao.status, 'com grupo correspondente');
                return validacao.status;
            }
        }
    }
    console.log('Nenhuma condição satisfeita, retornando 1');
    return 1;
};