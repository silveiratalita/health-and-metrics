# health-and-metrics
# Objetivo
Exportar /health e /metrics conforme retorno abaixo

GET/metrics
Return {
    "hostname": "talita",
    "uptime": 889024,
    "counter": 1
}

GET/health=>retorna status 200.

# get start
1. Tenha o docker instalado
2. Tenha o kind instalado
3. Tenha o kubctl instalado
4. Vá no terminal dentro  da raiz do projeto
5. Rode ```kind create cluster --config resources/kind-config.yaml``` 
6. Espere criar o container
7. Rode o ```kubectl get all``` para verificar q ta rodando o cluster no seu docker
8. instalar o nginx ingress controller com o comando ```kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml```
9. Faz o build da imagem do projeto node usando o dockerfile do projeto que está na raiz do projeto. Utilize o comando ```docker build -t service:v0 .``` 
10. Carregue a imagem gerada no kind cluster com o comando ```kind load docker-image service:v0```
11. Instalar recursos kubernetes por meio do comando ```kubectl apply -f resources/service.yaml```
12. No terminal rode ```curl -Lkv localhost/metrics``` 
13. Se quiser remova o cluster com o comando ```kind delete cluster```
