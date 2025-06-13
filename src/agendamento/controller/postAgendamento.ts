import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { validatePayload } from '../../utils/validation';
import { AgendamentoService } from '../service/AgendamentoService';

const agendamentoService = new AgendamentoService();

const schema = {
  medico: { required: true, type: 'string' },
  paciente: { required: true, type: 'string' },n
  data_horario: { required: true, type: 'string' },
};

export const postAgendamento = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  if (!event.body) {
    return { statusCode: 400, body: JSON.stringify({ message: 'Corpo da requisição obrigatório' }) };
  }

  const data = JSON.parse(event.body);
  const { valid, errors } = validatePayload(schema, data.agendamento || {});
  if (!valid) {
    return { statusCode: 400, body: JSON.stringify({ message: errors.join(', ') }) };
  }

  const agendamentoCriado = agendamentoService.criarAgendamento(data.agendamento);
  return {
    statusCode: 200,
    body: JSON.stringify({
      mensagem: 'Agendamento realizado com sucesso',
      agendamento: agendamentoCriado,
    }),
  };
};
