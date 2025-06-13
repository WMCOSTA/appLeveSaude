import { validatePayload } from '../src/utils/Validation';

describe('Validation', () => {
  const schema = {
    nome: { required: true, type: 'string' },
    idade: { required: true, type: 'number' },
    email: { required: false, type: 'string' },
  };

  test('deve validar payload válido', () => {
    const data = { nome: 'João', idade: 30, email: 'joao@example.com' };
    const result = validatePayload(schema, data);
    expect(result.valid).toBe(true);
    expect(result.errors).toBeUndefined();
  });

  test('deve detectar campo obrigatório faltante', () => {
    const data = { idade: 30 };
    const result = validatePayload(schema, data);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Campo nome é obrigatório.');
  });

  test('deve detectar tipo incorreto', () => {
    const data = { nome: 'João', idade: 'não é número' };
    const result = validatePayload(schema, data);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Campo idade deve ser do tipo number.');
  });
});
