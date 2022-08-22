Ex 1
a) VARCHAR(n) - são strings e o n representa o máximo de número de caracteres - DATE - representa uma data (formato americano)
b) quando roda o comando SHOW DATABASE, o "terminal" mostra  a database em que estou trabalhando. quando roda o comando SHOW TABLES, o "terminal" mostra as tabelas existentes na database.
c) quando roda o comando DESCRIBE Actor mostra a estrutura da tabela e os "tipos" que defini para ela.

Ex 2
b) ocorreu o erro "Error Code": 1062. Duplicate entry '002' for key 'PRIMARY'". Como foi definido que o id seria PRYMARY KEY, não aceita entrada duplicada, não pode ter nenhum outro id idêntico.
c) Error Code: 1136. Column count doesn't match value count at row 1 - Está faltando indicar os outros campos que estou inserindo junto com id, name... Inseri birth_date, gender e funcionou.
d) Error Code: 1364. Field 'name' doesn't have a default value - nome não tem um valor padrão, entao precisa indicar. No caso, indiquei um nome com os outros dados para criar o ator.
e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 - foi informado um number e pede uma string.


Ex 3
c) não retornou nada porque não existe ninguém cadastrado com o genero inválido.
e) Error Code: 1054. Unknown column 'nome' in 'field list' - ocorreu o erro porque não existe um dado chamado nome e sim name.

Ex 4
a) primeiro vai procurar as letras porque prioriza o que ta entre parenteses e depois a busca no salário