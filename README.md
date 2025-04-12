# Plano de Teste

**Sistema de Urna Eletrônica DCE**  
*versão 1.0*

## Histórico das alterações

   Data    | Versão |    Descrição   | Autor(a)
-----------|--------|----------------|-----------------
11/04/2025 |  1.0   | Release inicial | Equipe de Testes

## 1 - Introdução

Este documento descreve os requisitos a testar, os tipos de testes definidos para cada iteração, os recursos de hardware e software a serem empregados e o cronograma dos testes ao longo do projeto. As seções referentes aos requisitos, recursos e cronograma servem para permitir ao gerente do projeto acompanhar a evolução dos testes.

Com esse documento, você deve:
- Identificar informações de projeto existentes e os componentes de software que devem ser testados.
- Listar os Requisitos a testar.
- Recomendar e descrever as estratégias de teste a serem empregadas.
- Identificar os recursos necessários e prover uma estimativa dos esforços de teste.
- Listar os elementos resultantes do projeto de testes.

Programa a ser testado: Sistema de Urna Eletrônica (HTML, CSS, JavaScript)

## 2 - Requisitos a Testar

### Casos de uso:

Identificador do caso de uso | Nome do caso de uso
-----------------------------|---------------------
UC01                         | Votar em chapa
UC02                         | Votar em branco
UC03                         | Corrigir voto
UC04                         | Ver resultado da votação
UC05                         | Cadastrar chapa

### Requisitos não-funcionais:

Identificador do requisito   | Nome do requisito
-----------------------------|---------------------
RNF01                        | Interface intuitiva e funcional
RNF02                        | Persistência de dados com localStorage
RNF03                        | Tempo de resposta inferior a 1s
RNF04                        | Compatibilidade com navegadores modernos
RNF05                        | Tolerância a falhas como fechamento do navegador

## 3 - Tipos de teste

- Teste de interface de usuário  
- Teste de persistência de dados  
- Teste funcional (unitário)  
- Teste de integração entre componentes  
- Teste de tempo de resposta  
- Teste de animações  
- Teste de efeitos sonoros  

### 3.1 - Métodos da Classe

**Objetivo:** Validar funcionalidades da classe `UrnaEletronica` e `StorageManager`  
**Técnica:** (x) automática  
**Estágio do teste:** Unidade (x)  
**Abordagem:** Caixa preta (x)  
**Responsáveis:** Equipe de testes

### 3.2 - Persistência de Dados

**Objetivo:** Verificar se dados persistem após reinício do navegador  
**Técnica:** (x) automática  
**Estágio do teste:** Sistema (x)  
**Abordagem:** Caixa preta (x)  
**Responsáveis:** Equipe de testes

### 3.3 - Integração dos Componentes

**Objetivo:** Verificar se cadastro, votação e resultados estão integrados  
**Técnica:** (x) manual, (x) automática  
**Estágio do teste:** Integração (x)  
**Abordagem:** Caixa preta (x)  
**Responsáveis:** Equipe de testes

### 3.4 - Tempo de Resposta

**Objetivo:** Verificar tempo de resposta das ações  
**Técnica:** (x) manual  
**Estágio do teste:** Sistema (x)  
**Abordagem:** Caixa preta (x)  
**Responsáveis:** Equipe de testes

### 3.5 - Animação

**Objetivo:** Confirmar animação de fim de votação (confetes)  
**Técnica:** (x) manual  
**Estágio do teste:** Sistema (x)  
**Abordagem:** Caixa preta (x)  
**Responsáveis:** Equipe de testes

### 3.6 - Efeitos Sonoros

**Objetivo:** Verificar execução do som após voto  
**Técnica:** (x) manual  
**Estágio do teste:** Aceitação (x)  
**Abordagem:** Caixa preta (x)  
**Responsáveis:** Equipe de testes

## 4 - Recursos

### 4.1 - Ambiente de teste - Software e Hardware

- Sistema Operacional: Windows 10 ou superior  
- Navegadores: Google Chrome, Mozilla Firefox  
- Editor de código: VS Code  
- Hardware: CPU i5, 8GB RAM

### 4.2 - Ferramenta de teste

- Framework de teste personalizado em JavaScript (`framework.js`)
- Testes definidos em `test.js`

## 5 - Cronograma

Tipo de teste      | Duração | data de início | data de término
-------------------|---------|----------------|-----------------
Planejar teste     | 1 dia   | 08/04/2025     | 08/04/2025
Projetar teste     | 1 dia   | 09/04/2025     | 09/04/2025
Implementar teste  | 2 dias  | 10/04/2025     | 11/04/2025
Executar teste     | 2 dias  | 11/04/2025     | 12/04/2025
Avaliar teste      | 1 dia   | 12/04/2025     | 12/04/2025
