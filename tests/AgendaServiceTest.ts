import { AgendaService } from '../src/agenda/service/AgendaService'; // ajuste o caminho conforme sua estrutura
import { medicosMock } from '../src/agenda/mocks/medicosMock';

describe('AgendaService', () => {
  let agendaService: AgendaService;

  beforeEach(() => {
    agendaService = new AgendaService();
  });

  test('deve retornar a lista de médicos', () => {
    const medicos = agendaService.getMedicos();
    expect(medicos).toEqual(medicosMock);
  });
});
