import { IAgendamentoInput } from '../interface/IAgenda';

export class AgendamentoService {
  criarAgendamento(agendamento: IAgendamentoInput) {
    // Aqui poderia salvar em banco
    return {
      ...agendamento,
    };
  }
}