import { glpiPrismaClient } from '../../services/dbService';

type GroupName = string;
type GroupId = number;


// Busca o id do grupo baseado no nome passado
export const getGroupIdByName = async (group_name: GroupName): Promise<number> => {
    try {
        const row = await glpiPrismaClient.glpi_groups.findFirst({
            where: {
                name: {
                    equals: group_name,
                },
            },
            select: {
                id: true,
            },
        });
        return row.id;
    } catch (error) {
        console.error('Error fetching group by name:', (error as Error).message);
        throw error;
    }
};