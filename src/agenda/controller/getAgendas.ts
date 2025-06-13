import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { AgendaService } from '../service/AgendaService';

const agendaService = new AgendaService();

export const getAgendas = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  const medicos = agendaService.getMedicos();
  return {
    statusCode: 200,
    body: JSON.stringify({ medicos }),
  };
};
