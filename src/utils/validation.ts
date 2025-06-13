// Validador simples de payloads
export function validatePayload(schema: any, data: any): { valid: boolean; errors?: string[] } {
  const errors = [];
  for (const key in schema) {
    if (schema.hasOwnProperty(key)) {
      if (schema[key].required && !(key in data)) {
        errors.push(`Campo ${key} é obrigatório.`);
      } else if (schema[key].type && typeof data[key] !== schema[key].type) {
        errors.push(`Campo ${key} deve ser do tipo ${schema[key].type}.`);
      }
    }
  }
  return { valid: errors.length === 0, errors };
}