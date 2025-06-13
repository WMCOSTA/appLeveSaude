import { AgendamentoService } from '../src/agendamento/service/AgendamentoService'; // ajuste o caminho
import { IAgendamentoInput } from '../src/agendamento/interface/IAgenda';

describe('AgendamentoService', () => {
  let agendamentoService: AgendamentoService;

  beforeEach(() => {
    agendamentoService = new AgendamentoService();
  });

  test('deve criar um novo agendamento', () => {
    const agendamentoInput: IAgendamentoInput = {
      // preencha com um exemplo válido de acordo com a interface
      // Exemplo:
      medicoId: '123',
      pacienteNome: 'João Silva',
      dataHora: '2023-12-01T10:00:00',
    };
    const resultado = agendamentoService.criarAgendamento(agendamentoInput);
    expect(resultado).toEqual(agendamentoInput);
  });
});
