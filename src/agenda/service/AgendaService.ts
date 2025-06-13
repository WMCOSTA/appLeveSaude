import { IMedico } from '../interface/IMedico';
import { medicosMock } from '../mocks/medicosMock';

export class AgendaService {
  getMedicos(): IMedico[] {
    // Aqui poderia consultar banco de dados
    return medicosMock;
  }
}
