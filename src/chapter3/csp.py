#!python3.7
from typing import Generic, TypeVar, Dict, List, Optional
from abc import ABC, abstractclassmethod

V = TypeVar('V') # tipo para variável;
D = TypeVar('D') # tipo para domínio;

# Classe-base para todas as restições;
class Constraint(Generic [V,D], ABC):

    #As variáveis sujeitas à restrição
    def __init__(self, variables:List[V]) -> None:
        self.variables = variables
    
    #deve ser sobrescrito pelas subclasses
    @abstractclassmethod
    def satisfied(self, assingment: Dict[V,D]) -> bool:
        ...
    
# Um problema de satisfação de restrições é composto de variáveis do tipo V
# que têm intervalos de valores conhecidos como domínios do tipo D e restrições
# que determinam se a escolha de domínio de uma variável em particular é válida.
class CSP(Generic[V,D]):
    def __init__(self, variables:List[V], domains:Dict[V, List[D]]) -> None:
        self.variables : List[V] = variables #Variáveis a serem restringidas
        self.domains: Dict[V, List[D]] = domains
        self.constraints: Dict[V, List[Constraint[V,D]]] = {}
        for variable in self.variables:
            self.constraints[variable] = []
            if variable not in self.domains:
                raise LookupError('Todas as variáveis devem ter um domínio atribuída a ela.')
    
    def add_constraint(self, constraint:Constraint[V,D])->None:
        for variable in constraint.variables:
            if(variable not in self.variables):
                raise LookupError('variável em constraint não em CSP')
            else:
                self.constraints[variable].append(constraint)

    def consistent():pass #Todo