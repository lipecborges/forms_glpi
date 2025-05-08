import { SolTicketAlert, SolTicketConteudo, SolTicketError } from "../../../schemas/glpi/ticketSchema";

// Sucesso - Inscrição Estadual
export const generateSuccessContentIe = (ie: SolTicketConteudo, alert: SolTicketAlert) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #28a745; border-radius: 10px;
        padding: 25px; background-color: #f0fdf4; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
        12px rgba(0, 0, 0, 0.08);">
        <h2 style="font-size: 20px; font-weight: 600; color: #14532d; margin-bottom: 12px;">✔ Inscrição Estadual Atualizada com Sucesso!</h2>
        <p style="font-size: 17px; color: #166534; margin-bottom: 15px;">Inscrição Estadual: <strong style="color: #052e16;">${ie}</strong></p>
        ${alert ? `<div style="background-color Obtaining: #fffbeb; border-left: 4px solid #facc15; padding: 10px; margin: 15px auto;
            border-radius: 5px; font-size: 15px; color: #92400e;">⚠️ ${alert}</div>` : ''}
        <small style="font-size: 12px; color: #64748b;">A inscrição estadual foi atualizada automaticamente pelo sistema.</small>
    </div>
`;

// Erro - Inscrição Estadual (Referência)
export const generateErrorContentIe = (alert: SolTicketAlert, error: SolTicketError) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #dc3545; border-radius: 10px;
            padding: 25px; background-color: #fef2f2; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
            12px rgba(0, 0, 0, 0.08);">
            <h2 style="font-size: 20px; font-weight: 600; color: #b91c1c; margin-bottom: 12px;">✖ Inscrição Estadual não Atualizada</h2>
            <p style="font-size: 17px; color: #991b1b; margin-bottom: 15px;"><strong style="color:
                    #7f1d1d;">${error}</strong></p>
            ${alert ? `<div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 10px; margin: 15px auto;
                border-radius: 5px; font-size: 15px; color: #854d0e;">${alert}</div>` : ''}
            <small style="font-size: 12px; color: #64748b;">Essa validação foi feita automaticamente pelo sistema.</small>
        </div>
`;

// Sucesso - Ordem de Produção
export const generateSuccessContentOp = (op: SolTicketConteudo) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #28a745; border-radius: 10px;
        padding: 25px; background-color: #f0fdf4; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
        12px rgba(0, 0, 0, 0.08);">
        <h2 style="font-size: 20px; font-weight: 600; color: #14532d; margin-bottom: 12px;">✔ Ordem de Produção Criada com Sucesso</h2>
        <p style="font-size: 17px; color: #166534; margin-bottom: 15px;">Ordem de Produção: <strong style="color: #052e16;">${op}</strong></p>
        <small style="font-size: 12px; color: #64748b;">Esta ordem foi gerada automaticamente pelo sistema.</small>
    </div>
`;

// Erro - Ordem de Produção
export const generateErrorContentOp = (error: SolTicketError) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #dc3545; border-radius: 10px;
        padding: 25px; background-color: #fef2f2; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
        12px rgba(0, 0, 0, 0.08);">
        <h2 style="font-size: 20px; font-weight: 600; color: #b91c1c; margin-bottom: 12px;">✖ Erro ao Criar a Ordem</h2>
        <p style="font-size: 17px; color: #991b1b; margin-bottom: 15px;"><strong style="color: #7f1d1d;">${error}</strong></p>
        <small style="font-size: 12px; color: #64748b;">Entre em contato com o suporte para resolver este problema.</small>
    </div>
`;

// Sucesso - Estorno de Ordem de Produção
export const generateSuccessContentEstornaOp = (conteudo: SolTicketConteudo) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #28a745; border-radius: 10px;
        padding: 25px; background-color: #f0fdf4; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
        12px rgba(0, 0, 0, 0.08);">
        <h2 style="font-size: 20px; font-weight: 600; color: #14532d; margin-bottom: 12px;">✔ Ordem de Produção Estornada com Sucesso</h2>
        <p style="font-size: 17px; color: #166534; margin-bottom: 15px;"><strong style="color: #052e16;">${conteudo}</strong></p>
        <small style="font-size: 12px; color: #64748b;">Este estorno foi realizado automaticamente pelo sistema.</small>
    </div>
`;

// Erro - Estorno de Ordem de Produção
export const generateErrorContentEstornaOp = (error: SolTicketError) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #dc3545; border-radius: 10px;
        padding: 25px; background-color: #fef2f2; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
        12px rgba(0, 0, 0, 0.08);">
        <h2 style="font-size: 20px; font-weight: 600; color: #b91c1c; margin-bottom: 12px;">✖ Erro ao Estornar a Ordem</h2>
        <p style="font-size: 17px; color: #991b1b; margin-bottom: 15px;"><strong style="color: #7f1d1d;">${error}</strong></p>
        <small style="font-size: 12px; color: #64748b;">Entre em contato com o suporte para resolver este problema.</small>
    </div>
`;

// Sucesso - Registro Info
export const generateSuccessContentModRegInfo = (conteudo: SolTicketConteudo) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #28a745; border-radius: 10px;
        padding: 25px; background-color: #f0fdf4; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
        12px rgba(0, 0, 0, 0.08);">
        <h2 style="font-size: 20px; font-weight: 600; color: #14532d; margin-bottom: 12px;">✔ Registro Info Atualizado com Sucesso</h2>
        <p style="font-size: 17px; color: #166534; margin-bottom: 15px;"><strong style="color: #052e16;">${conteudo}</strong></p>
        <small style="font-size: 12px; color: #64748b;">Este registro foi atualizado automaticamente pelo sistema.</small>
    </div>
`;

// Erro - Registro Info
export const generateErrorContentModRegInfo = (error: SolTicketError) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #dc3545; border-radius: 10px;
        padding: 25px; background-color: #fef2f2; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
        12px rgba(0, 0, 0, 0.08);">
        <h2 style="font-size: 20px; font-weight: 600; color: #b91c1c; margin-bottom: 12px;">✖ Erro ao Atualizar o Registro Info</h2>
        <p style="font-size: 17px; color: #991b1b; margin-bottom: 15px;"><strong style="color: #7f1d1d;">${error}</strong></p>
        <small style="font-size: 12px; color: #64748b;">Entre em contato com o suporte para resolver este problema.</small>
    </div>
`;

// Sucesso - Data Entrega Av
export const generateSuccessContentDtEntregAv = (conteudo: SolTicketConteudo) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #28a745; border-radius: 10px;
        padding: 25px; background-color: #f0fdf4; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
        12px rgba(0, 0, 0, 0.08);">
        <h2 style="font-size: 20px; font-weight: 600; color: #14532d; margin-bottom: 12px;">✔ Data de Entrega do AV atualizada com Sucesso</h2>
        <p style="font-size: 17px; color: #166534; margin-bottom: 15px;"><strong style="color: #052e16;">${conteudo}</strong></p>
        <small style="font-size: 12px; color: #64748b;">Este registro foi atualizado automaticamente pelo sistema.</small>
    </div>
`;
// Erro - Data Entrega Av
export const generateErrorContentDtEntregAv = (error: SolTicketError) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #dc3545; border-radius: 10px;
        padding: 25px; background-color: #fef2f2; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
        12px rgba(0, 0, 0, 0.08);">
        <h2 style="font-size: 20px; font-weight: 600; color: #b91c1c; margin-bottom: 12px;">✖ Erro ao Atualizar Data de Entrega do AV</h2>
        <p style="font-size: 17px; color: #991b1b; margin-bottom: 15px;"><strong style="color: #7f1d1d;">${error}</strong></p>
        <small style="font-size: 12px; color: #64748b;">Entre em contato com o suporte para resolver este problema.</small>
    </div>
`;

// Reprovado
export const generateReprovedContent = (user_name: string) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #dc3545; border-radius: 10px;
        padding: 25px; background-color: #fef2f2; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
        12px rgba(0, 0, 0, 0.08);">
        <h2 style="font-size: 20px; font-weight: 600; color: #b91c1c; margin-bottom: 12px;">✖ Reprovação da Solicitação</h2>
        <p style="font-size: 17px; color: #991b1b; margin-bottom: 15px;">Reprovada por: <strong style="color: #7f1d1d;">${user_name}</strong></p>
        <small style="font-size: 12px; color: #64748b;">Revise sua solicitação ou contate o responsável pela reprovação.</small>
    </div>
`;

// Aprovado
export const generateApprovedContent = (user_name: string) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #28a745; border-radius: 10px;
        padding: 25px; background-color: #f0fdf4; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
        12px rgba(0, 0, 0, 0.08);">
        <h2 style="font-size: 20px; font-weight: 600; color: #14532d; margin-bottom: 12px;">✔ Aprovação da Solicitação</h2>
        <p style="font-size: 17px; color: #166534; margin-bottom: 15px;">Aprovada por: <strong style="color: #052e16;">${user_name}</strong></p>
        <small style="font-size: 12px; color: #64748b;">A ordem de produção será criada em breve.</small>
    </div>
`;

// Sucesso - HTML Completo
export const generateHtmlSuccessContent = (conteudo: SolTicketConteudo) => `
<html>
<head>
    <title>Validação de Ticket</title>
</head>
<body style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f0fdf4;">
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #28a745; border-radius: 10px;
        padding: 25px; background-color: #f0fdf4; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
        12px rgba(0, 0, 0, 0.08);">
        <h2 style="font-size: 20px; font-weight:  Newbury: 600; color: #14532d; margin-bottom: 12px;">✔ Sucesso!</h2>
        <p style="font-size: 17px; color: #166534; margin-bottom: 15px;">${conteudo}</p>
        <small style="font-size: 12px; color: #64748b;">Processado automaticamente pelo sistema.</small>
    </div>
</body>
</html>
`;

// Erro Interno - HTML Completo
export const generateHtmlinternalErrorContent = (conteudo: SolTicketConteudo) => `
<html>
<head>
    <title>Erro Interno</title>
</head>
<body style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #fef2f2;">
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; border: 2px solid #dc3545; border-radius: 10px;
        padding: 25px; background-color: #fef2f2; text-align: center; max-width: 480px; margin: 30px auto; box-shadow: 0 6px
        12px rgba(0, 0, 0, 0.08);">
        <h2 style="font-size: 20px; font-weight: 600; color: #b91c1c; margin-bottom: 12px;">✖ Erro Interno</h2>
        <p style="font-size: 17px; color: #991b1b; margin-bottom: 15px;"><strong style="color: #7f1d1d;">${conteudo}</strong></p>
        <small style="font-size: 12px; color: #64748b;">Entre em contato com o suporte para resolver este problema.</small>
    </div>
</body>
</html>
`;