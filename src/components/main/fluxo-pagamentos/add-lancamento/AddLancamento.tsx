// AddLancamento.tsx

// styles
import styles from './AddLancamento.module.css';

//react
import { useState } from 'react';
import React from 'react';

export const AddLancamento = () => {
  // Definindo estados para cada campo
  const [pagador, setPagador] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [orcamento, setOrcamento] = useState('');
  const [tipoGasto, setTipoGasto] = useState('');
  const [vencimento, setVencimento] = useState('');
  const [valor, setValor] = useState('');
  const [parcTotais, setParcTotais] = useState('');
  const [parcAtual, setParcAtual] = useState('');
  const [formPag, setFormPag] = useState('');
  const [situacao, setSituacao] = useState('');
  const [nota, setNota] = useState('');
  const [fatura, setFatura] = useState('');
  const [boleto, setBoleto] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log({
      pagador,
      fornecedor,
      orcamento,
      tipoGasto,
      vencimento,
      valor,
      parcTotais,
      parcAtual,
      formPag,
      situacao,
      nota,
      fatura,
      boleto,
      observacao,
    });
  };

  return (
    <div className={styles.wrapAddLanc}>
      <h2 className={styles.title}>Adicionar Lançamento</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo para Pagador */}
        <div className={styles.formGroup}>
          <label htmlFor="pagador">Pagador:</label>
          <select
            id="pagador"
            name="pagador"
            value={pagador}
            onChange={(e) => setPagador(e.target.value)}>
            <option value="" disabled>--</option>
            <option value="MV Arquitetura e Obras">MV Arquitetura e Obras</option>
            <option value="D'Bali Engenharia">{`D'Bali Engenharia`}</option>
            <option value="Vinicius Baliani">Vinicius Baliani</option>
            <option value="Valdemir">Valdemir</option>
          </select>
        </div>

        {/* Campo para Fornecedor */}
        <div className={styles.formGroup}>
          <label htmlFor="fornecedor">Fornecedor:</label>
          <select
            id="fornecedor"
            name="fornecedor"
            value={fornecedor}
            onChange={(e) => setFornecedor(e.target.value)}>
            <option value="" disabled>--</option>
            <option value="Fornecedor A">Fornecedor A</option>
            <option value="Fornecedor B">Fornecedor B</option>
            <option value="Fornecedor C">Fornecedor C</option>
          </select>
        </div>

        {/* Campo para Orçamento */}
        <div className={styles.formGroup}>
          <label htmlFor="orcamento">Orçamento:</label>
          <select
            id="orcamento"
            name="orcamento"
            value={orcamento}
            onChange={(e) => setOrcamento(e.target.value)}>
            <option value="" disabled>--</option>
            <option value="Orçamento 1">Orçamento 1</option>
            <option value="Orçamento 2">Orçamento 2</option>
            <option value="Orçamento 3">Orçamento 3</option>
          </select>
        </div>

        {/* Campo para Tipo Gasto */}
        <div className={styles.formGroup}>
          <label htmlFor="tipoGasto">Tipo Gasto:</label>
          <select
            id="tipoGasto"
            name="tipoGasto"
            value={tipoGasto}
            onChange={(e) => setTipoGasto(e.target.value)}>
            <option value="" disabled>--</option>
            <option value="Material">Material</option>
            <option value="Serviço Obra">Serviço Obra</option>
            <option value="Alimentação">Alimentação</option>
          </select>
        </div>

        {/* Campo para Vencimento */}
        <div className={styles.formGroup}>
          <label htmlFor="vencimento">Vencimento:</label>
          <input
            type="date"
            id="vencimento"
            name="vencimento"
            value={vencimento}
            onChange={(e) => setVencimento(e.target.value)}
            required
          />
        </div>

        {/* Campo para Valor */}
        <div className={styles.formGroup}>
          <label htmlFor="valor">Valor:</label>
          <input
            type="number"
            id="valor"
            name="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
            placeholder="Digite o valor"
            min="0"
          />
        </div>

        {/* Campo para Parcelas Totais */}
        <div className={styles.formGroup}>
          <label htmlFor="parcTotais">Parcelas Totais:</label>
          <input
            type="number"
            id="parcTotais"
            name="parcTotais"
            value={parcTotais}
            onChange={(e) => setParcTotais(e.target.value)}
            required
            placeholder="Digite total de parcelas"
            min="0"
          />
        </div>

        {/* Campo para Parcela Atual */}
        <div className={styles.formGroup}>
          <label htmlFor="parcAtual">Parcela Atual:</label>
          <input
            type="number"
            id="parcAtual"
            name="parcAtual"
            value={parcAtual}
            onChange={(e) => setParcAtual(e.target.value)}
            required
            placeholder="Digite a parcela atual"
            min="0"
          />
        </div>

        {/* Campo para Forma de Pagamento */}
        <div className={styles.formGroup}>
          <label htmlFor="formPag">Forma Pagamento:</label>
          <select
            id="formPag"
            name="formPag"
            value={formPag}
            onChange={(e) => setFormPag(e.target.value)}>
            <option value="" disabled>--</option>
            <option value="Boleto">Boleto</option>
            <option value="Pix">Pix</option>
            <option value="Déb. Auto">Déb. Auto</option>
          </select>
        </div>

        {/* Campo para Situação */}
        <div className={styles.formGroup}>
          <label htmlFor="situacao">Situação:</label>
          <select
            id="situacao"
            name="situacao"
            value={situacao}
            onChange={(e) => setSituacao(e.target.value)}>
            <option value="" disabled>--</option>
            <option value="Pago">Pago</option>
            <option value="Aberto">Aberto</option>
          </select>
        </div>

        {/* Campo para Nota Fiscal */}
        <div className={styles.formGroup}>
          <label htmlFor="nota">Nota Fiscal:</label>
          <select
            id="nota"
            name="nota"
            value={nota}
            onChange={(e) => setNota(e.target.value)}>
            <option value="" disabled>--</option>
            <option value="1045">1045</option>
            <option value="18597">18597</option>
            <option value="12">12</option>
          </select>
        </div>

        {/* Campo para Fatura */}
        <div className={styles.formGroup}>
          <label htmlFor="fatura">Fatura:</label>
          <select
            id="fatura"
            name="fatura"
            value={fatura}
            onChange={(e) => setFatura(e.target.value)}>
            <option value="" disabled>--</option>
            <option value="loc-1899">loc-1899</option>
            <option value="1515">1515</option>
            <option value="8">8</option>
          </select>
        </div>

        {/* Campo para Boleto */}
        <div className={styles.formGroup}>
          <label htmlFor="boleto">Boleto:</label>
          <select
            id="boleto"
            name="boleto"
            value={boleto}
            onChange={(e) => setBoleto(e.target.value)}>
            <option value="" disabled>--</option>
            <option value="365">365</option>
            <option value="998">998</option>
            <option value="85">85</option>
          </select>
        </div>

        {/* Campo para Observação */}
        <div className={styles.formGroup}>
          <label htmlFor="observacao">Observação:</label>
          <textarea
            id="observacao"
            name="observacao"
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
            rows={2}
            placeholder='Observações...'>
          </textarea>
        </div>

        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </div>
  );
};