export interface IAgendamentoResponse {
  mensagem: string;
  agendamento: {
    medico: string;
    paciente: string;
    data_horario: string;
  };
}
