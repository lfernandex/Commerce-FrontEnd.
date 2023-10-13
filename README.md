# Commerce-Frontend

Este projeto de desenvolvimento segue o conceito de componentes React:

- É uma função JavaScript
- O componente React tipicamente possui:
  - Dados
  - Comportamento
  - Representação visual (é um "pedaço" da tela da interface gráfica)
- Possui um ciclo de vida gerenciado pelo React
- Sua representação visual é definida em código JSX (JavaScript XML)



## Utilização de Props e Rotas

Props podem ser entendidas como parâmetros do componente React. O componente deve receber as props como um objeto. As props são passadas como argumento usando sintaxe similar aos atributos dos elementos HTML. Para manipulação de rotas, o React Router é uma solução popular para trabalhar com rotas no ReactJS.
### Exemplo de utilização de props:

```
type Props = {
    text: string;
}
export default function ButtonInverse({ text }: Props) {
    return (
        <>
            <div className="fb-btn fb-btn-white">
                {text}
            </div>
        </>
    );
}
```
### Exemplo de definição de rotas aninhadas

Se uma rota leva a um conteúdo e dentro deste conteúdo há outro(s) subconteúdo(s) que correspondem a novas rotas, então deve-se definir os subconteúdo(s) como sub-rotas aninhadas. No conteúdo principal, deverá haver um elemento `<Outlet />` para definir onde aparecerá o subconteúdo.

```jsx
<Routes>
   <Route path="/" element={<ClientHome />} >
     <Route index element={<Navigate to="/product-catalog" />} />
      <Route path="product-catalog" element={<ProductCatalog />} />
        <Route path="product-details/:productId" element={<ProductDetails />} />
        <Route path="product-cart" element={<ProductCart />} />
        <Route path="login" element={<Login />} />
        <Route path="confirmation/:orderId" element={<PrivateRoute><Confirmation /></PrivateRoute>} />
   </Route>

   <Route path="/admin/" element={<PrivateRoute roles={['ROLE_ADMIN']}><Admin /></PrivateRoute>}>
     <Route index element={ <Navigate to="/admin/home" />} />
     <Route path="home" element={<AdminHome />} />
     <Route path="products" element={<ProductListing />} />
     <Route path="products/:productId" element={<ProductForm />} />
   </Route>

  <Route path="*" element={<Navigate to="/" />} />
</Routes>
```
## React Hooks
Os React Hooks permitem usar estado e outros recursos nos componentes React sem precisar criar esses componentes como classes JavaScript.

### useState:
O useState é um React Hook que permite armazenar estado dentro de um componente. O componente é capaz de observar mudanças neste estado e reagir a essas mudanças.

### useEffect:
O useEffect é um React Hook que permite executar uma função no momento da criação do componente ou quando um estado do componente muda. Ele pode observar e reagir a mudanças de estado no componente.

## LocalStorage e Carrinho de Compras
Utilizamos o LocalStorage para implementar a lógica do carrinho de compras. 

### Adotamos a estrutura para o projeto:

![image](https://github.com/lfernandex/Commerce-FrontEnd./assets/106842103/7a4c2c6b-6e50-4a79-a93b-482c9ad4f201)

## Eventos e Estado Global
Estratégia para comunicação entre componentes:

O componente pai deve passar uma função como argumento (prop) para o componente filho.
Dessa forma, o componente filho poderá fazer a chamada (ou ativação) da função do componente pai.

O componente filho envia um evento para o componente pai.

O componente pai observa o evento do componente filho e reage a ele.

## Login e Controle de Acesso
### Estrutura para Login e Controle de Acesso: 

Formulário e requisição de login (OAuth2)

Salvar token globalmente no localStorage (para que possamos fazer requisições a recursos protegidos)

Interceptors e redirecionamento fora do componente React (para que possamos globalmente redirecionar quando o back end responder 401 ou 403)

Fluxos de controle de acesso

Controle de acesso em nível de rota

Controle de acesso em nível de componente (restrição de conteúdo)

## Salvando Token Globalmente no LocalStorage

Uma vez que o usuário realizou o login e obteve um token, armazenamos este token localmente, para que possamos realizar requisições a recursos protegidos.

## Controle de Acesso em Nível de Rota
Permite que o frontend possa executar uma ação caso o usuário acesse uma rota que não tenha permissão, sem depender de um erro 401 ou 403 advindo do backend.

### Controle de Acesso em Nível de Componente
Restringir o conteúdo conforme o perfil do usuário.

## Formulários e CRUD Completo

### Estratégia para controle de formulário:

Validação no frontend

Regras de validação, expressões regulares

Exibição de mensagem para cada campo

Comportamento "sujo"

Exibição de mensagem global
