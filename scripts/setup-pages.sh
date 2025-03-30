#!/bin/bash

# Script para configurar o GitHub Pages para seu repositório
# Execute este script localmente após clonar o repositório

# Obter nome do repositório atual
REPO_NAME=$(basename -s .git `git config --get remote.origin.url`)
REPO_OWNER=$(git config --get remote.origin.url | sed -e 's/.*github.com[:/]\(.*\)\/\(.*\).git/\1/')

echo "Repositório: $REPO_OWNER/$REPO_NAME"
echo ""
echo "Para configurar o GitHub Pages manualmente:"
echo ""
echo "1. Acesse seu repositório no GitHub: https://github.com/$REPO_OWNER/$REPO_NAME"
echo "2. Clique na aba 'Settings' (Configurações)"
echo "3. No menu lateral esquerdo, clique em 'Pages'"
echo "4. Em 'Source', selecione 'GitHub Actions'"
echo "5. Se solicitado, clique em 'Create Deploy Workflow' e confirme a ação"
echo ""
echo "IMPORTANTE: Você precisa ter privilégios de administrador para configurar o GitHub Pages."
echo ""
echo "Após a configuração manual, execute o workflow novamente através da aba 'Actions' do GitHub." 