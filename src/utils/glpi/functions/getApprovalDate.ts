import { searchItems } from '../../../services/glpi/searchService';
import { searchTicketParams } from '../params/searchParams'
import { ApprovalDateResponse } from '../../../types/glpi/interfaces';



export const getApprovalDate = async (id: number) => {
    const searchParam = searchTicketParams(id);
    const searchType = 'Ticket';
    try {
        const approvalDate: ApprovalDateResponse = await searchItems(searchType, searchParam);

        if (approvalDate.data.length === 0) {
            throw new Error('Ticket não encontrado');
        }
        return approvalDate.data[0]['19'];
    } catch (error) {
        console.error('Erro na chamada da do endpoint getApprovalDate:', (error as any).response?.data || (error as Error).message);
        throw error;
    }
}