# 🔗 Gerenciador de Links

Um aplicativo mobile simples, construído com React Native e Expo, para salvar e organizar seus links favoritos por categoria.

---

## ✨ Funcionalidades

-   **Listagem por Categoria:** Navegue pelos seus links organizados em categorias.
-   **Adicionar Links:** Adicione novos links com nome, URL e categoria.
-   **Detalhes do Link:** Visualize os detalhes de cada link em um modal interativo.
-   **Ações Rápidas:**
    -   **Abrir:** Abra o link diretamente no navegador padrão do seu dispositivo.
    -   **Excluir:** Remova links indesejados com uma etapa de confirmação para evitar exclusões acidentais.
-   **Persistência de Dados:** Seus links são salvos localmente no dispositivo, garantindo que eles estejam disponíveis mesmo após fechar o aplicativo.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

-   **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento de aplicações mobile multiplataforma.
-   **[Expo](https://expo.dev/)**: Plataforma e conjunto de ferramentas para construir e implantar aplicações React Native.
-   **[Expo Router](https://docs.expo.dev/router/introduction/)**: Sistema de roteamento baseado em arquivos para navegação entre telas.
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática ao código.
-   **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/)**: Utilizado para o armazenamento local de dados (persistência dos links).

---

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
-   [Expo Go](https://expo.dev/go) instalado em seu dispositivo móvel (Android/iOS) ou um emulador configurado.
-   `npm` ou `yarn` como gerenciador de pacotes.

### Instalação

1.  Clone o repositório para sua máquina local:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd links
    ```

2.  Instale as dependências do projeto:
    ```bash
    npm install
    # ou
    yarn install
    ```

### Executando a Aplicação

1.  Inicie o servidor de desenvolvimento do Expo:
    ```bash
    npx expo start
    ```

2.  Após o servidor iniciar, um QR code será exibido no terminal. Escaneie este QR code com o aplicativo Expo Go em seu celular para abrir a aplicação.

---

## 📂 Estrutura do Projeto

O projeto utiliza uma estrutura organizada para facilitar a manutenção e escalabilidade.

```
links/
├── src/
│   ├── app/          # Arquivos de rota (Expo Router)
│   ├── assets/       # Imagens e fontes
│   ├── components/   # Componentes reutilizáveis
│   ├── storage/      # Lógica de armazenamento local
│   ├── styles/       # Estilos globais e tema
│   └── utils/        # Funções utilitárias e dados estáticos
├── app.json          # Configurações do Expo
└── README.md
```

-   **`src/app`**: Diretório raiz para o Expo Router. Cada arquivo/pasta aqui representa uma rota na aplicação.
-   **`src/components`**: Contém componentes React reutilizáveis, como `Link`, `Categories`, etc.
-   **`src/storage`**: Abstrai a lógica de interação com o `AsyncStorage` para salvar e recuperar os links.
-   **`src/styles`**: Define cores, fontes e outros estilos globais.
-   **`src/utils`**: Armazena dados estáticos, como a lista de categorias.

