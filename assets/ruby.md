# Basico de Ruby para iniciantes

### 1. **Instalação no Arch Linux**
```sh
sudo pacman -S ruby
```
Verifique se a instalação foi bem-sucedida:
```sh
ruby -v
```

### 2. **Sintaxe Básica**
#### **Variáveis e Tipos de Dados**
```ruby
nome = "Led Zeplin"  # String
idade = 30           # Integer
altura = 1.75        # Float
verdadeiro = true    # Boolean
```

#### **Entrada e Saída**
```ruby
print "Digite seu nome: "
nome = gets.chomp  # .chomp remove a quebra de linha
puts "Olá, #{nome}!"
```

#### **Condicionais (`if`, `else`, `elsif`)**
```ruby
idade = 18
if idade >= 18
  puts "Maior de idade"
elsif idade >= 16
  puts "Pode votar, mas não dirigir"
else
  puts "Menor de idade"
end
```

#### **Loops (`for`, `while`, `times`)**
```ruby
# for
for i in 1..5
  puts "Iteração #{i}"
end

# while
x = 0
while x < 5
  puts "x é #{x}"
  x += 1
end

# times
5.times { |i| puts "Repetição #{i}" }
```

#### **Vetores e Matrizes**
```ruby
# Vetor
numeros = [1, 2, 3, 4, 5]
puts numeros[2]  # Acessa o índice 2 (terceiro elemento)

# Matriz (array de arrays)
matriz = [[1, 2, 3], [4, 5, 6]]
puts matriz[1][2]  # Acessa o número 6
```

#### **Manipulação de Strings**
```ruby
texto = "Ruby é incrível"
puts texto.upcase  # "RUBY É INCRÍVEL"
puts texto.downcase # "ruby é incrível"
puts texto.reverse  # "levírcni é ybuR"
puts texto.length   # 14
```

#### **Funções**
```ruby
def saudacao(nome)
  return "Olá, #{nome}!"
end

puts saudacao("Zeplin")
```

#### **Classes e Objetos**
```ruby
class Pessoa
  attr_accessor :nome, :idade

  def initialize(nome, idade)
    @nome = nome
    @idade = idade
  end

  def apresentar
    puts "Meu nome é #{@nome} e tenho #{@idade} anos."
  end
end

p1 = Pessoa.new("Led Zeplin", 30)
p1.apresentar
```
