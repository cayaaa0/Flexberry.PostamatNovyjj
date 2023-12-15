docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postamatnovyjj-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t postamatnovyjj-java/app ../../..
