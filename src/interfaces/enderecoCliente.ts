export default interface EnderecoCliente {
  id?: number;
  logradouro: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  complemento: string;
}
