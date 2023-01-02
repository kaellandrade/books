# Padrões em exemplos em PHP

## [Criacionais](PadroesCriacionais)
- [Factory method](PadroesCriacionais/factory-method)

    <aside>
    💡 Fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.
    </aside>
  
    -  Objetos retornados por um método fábrica são geralmente chamados produtos.
    -  Use o Factory Method quando não souber de antemão os tipos e dependências exatas dos objetos com os quais seu código deve funcionar.
    -  O Factory Method separa o código de construção do produto do código que realmente usa o produto. Portanto, é mais fácil estender o código de construção do produto independentemente do restante do código.
    - Use o Factory Method quando deseja economizar recursos do sistema reutilizando objetos existentes em vez de recriá-los sempre.
- Abstract Factory
    <aside>
    💡 Fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.
    </aside>

- Builder
    <aside>
    💡 Permite construir objetos complexos passo a passo. O padrão permite produzir diferentes tipos e representações de um objeto usando o mesmo código de construção.
    </aside>

- Prototype
    <aside>
    💡 Permite que você copie objetos existentes sem fazer seu código ficar dependente de suas classes.
    </aside>

- Singleton
    <aside>
    💡 Permite a você garantir que uma classe tem apenas uma instância, enquanto provê um ponto de acesso global para esta instância.
    </aside>