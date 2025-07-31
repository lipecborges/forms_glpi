export type Validation = {
    status: number | null;
};

export function getValidationPercent(validations: Validation[]): number {
    // Filtra apenas os validados (3) e recusados (4)
    const relevantes = validations.filter(v => v.status === 3 || v.status === 4);
    const total = relevantes.length;
    if (total === 0) return 0;

    // Conta quantos foram aprovados (status 3)
    const aprovados = relevantes.filter(v => v.status === 3).length;

    // Calcula o percentual de aprovados entre os relevantes
    return (aprovados / total) * 100;
}