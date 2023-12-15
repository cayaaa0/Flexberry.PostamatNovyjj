docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postamatnovyjj/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t postamatnovyjj/app ../..
