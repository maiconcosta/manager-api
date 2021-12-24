export default interface Produto {
  id?: number;
  nome: string;
  valor: number;
  ativo: boolean;
  imagem?: string;
  categoriaId: number;
}
