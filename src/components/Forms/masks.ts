export const MaskTypes = {
  cpf: [/\d/, /\d/,  /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
  cnpj: [/\d/, /\d/, '.',  /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/,  /\d/,  /\d/, '-', /\d/,  /\d/],
}

export type TMasks = 'cpf' | 'cnpj'
