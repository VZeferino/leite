# Configurando GitHub Pages para este projeto

Este documento explica como configurar corretamente o GitHub Pages para o deploy deste site Next.js.

## Problema Comum: Erro "Get Pages site failed" ou "Resource not accessible by integration"

Se você estiver recebendo erros como:
- `Warning: Get Pages site failed. Error: Not Found`
- `Error: Create Pages site failed. Error: Resource not accessible by integration`
- `Error: HttpError: Resource not accessible by integration`

Isso geralmente significa que o GitHub Pages ainda não está ativado corretamente no seu repositório ou as permissões não estão configuradas adequadamente.

## Solução Manual (Recomendada)

### 1. Acesse as configurações do repositório no GitHub

- Vá para seu repositório no GitHub
- Clique na aba "Settings" (Configurações)

### 2. Configure GitHub Pages

- No menu lateral esquerdo, role para baixo e clique em "Pages"
- Em "Source", selecione "GitHub Actions"
- Se solicitado, clique em "I understand, start using GitHub Actions to build and deploy my site."

### 3. Verifique as permissões

- Ainda nas configurações, clique em "Actions" no menu lateral
- Em "Workflow permissions", selecione "Read and write permissions"
- Marque a opção "Allow GitHub Actions to create and approve pull requests"
- Clique em "Save" para salvar as alterações

### 4. Execute novamente o workflow

- Vá para a aba "Actions" do seu repositório
- Encontre o workflow "Deploy Next.js site to Pages"
- Clique no botão "Re-run all jobs" para executar novamente o workflow

### 5. Defina o domínio (opcional)

- Se você quiser usar um domínio personalizado, volte para a seção "Pages" nas configurações
- Em "Custom domain", insira seu domínio personalizado
- Siga as instruções para configurar os registros DNS

## Solução via Terminal

Você também pode usar o script que fornecemos para obter instruções mais específicas:

```bash
# Torne o script executável
chmod +x scripts/setup-pages.sh

# Execute o script
./scripts/setup-pages.sh
```

## Troubleshooting Adicional

Se o problema persistir:

1. **Verifique se você é administrador do repositório** - Apenas administradores podem configurar GitHub Pages.

2. **Verifique se o nome do repositório está correto** - O GitHub Pages usa o nome do repositório na URL, certifique-se de que está configurado corretamente em `next.config.mjs`.

3. **Limpe o cache do GitHub Actions** - Às vezes, problemas de cache podem causar falhas. Você pode tentar limpar o cache nas configurações do Actions.

4. **Contate o suporte do GitHub** - Se nada mais funcionar, você pode abrir um ticket de suporte com o GitHub.

## Após o Deploy Bem-sucedido

Uma vez configurado corretamente, seu site estará disponível em:
- `https://[seu-usuario].github.io/[nome-do-repositorio]/`

Por exemplo: `https://vitor_zeferino.github.io/leite/` 