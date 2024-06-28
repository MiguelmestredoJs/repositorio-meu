const imoveisDB = [
    {
        "id": 1,
        "url_foto": "img/1.jpg",
        "nome": "Sobrado lindo",
        "cidade": "Saltinho",
        "estado": "Minas Gerais",
        "favorito": false,
        "tipo": 2,
        "adicionais": [
            {
                "chave": "quartos disponíveis",
                "valor": 6
            },
            {
                "chave": "Piscina",
                "valor": "sim"
            }
        ]
    },
    {
        "id": 2,
        "url_foto": "img/2.jpg",
        "nome": "Kitnet econômica",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": 1,
        "adicionais": [
            {
                "chave": "Banheiro",
                "valor": 1
            },
        ]
    },
    {
        "id": 3,
        "url_foto": "img/3.jpg",
        "nome": "Casa grande",
        "cidade": "Americana",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": 2,
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 10
            },
            {
                "chave": "Quintal",
                "valor": "Muito Grande"
            },
            {
                "chave": "Árvores",
                "valor": "bastante"
            }
        ]
    },
    {
        "id": 4,
        "url_foto": "img/4.jpg",
        "nome": "Casa simples",
        "cidade": "Nova Odessa",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": 2,
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 2
            },
            {
                "chave": "Garagem",
                "valor": "sim"
            }
        ]
    },
    {
        "id": 5,
        "url_foto": "img/5.jpg",
        "nome": "Mansão",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": 2,
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 10
            },
            {
                "chave": "Andares",
                "valor": 2
            },
            {
                "chave": "Espaço",
                "valor": "Bastante"
            }
        ]    
    },  
    {
        "id": 6,
        "url_foto": "img/6.jpg",
        "nome": "Casa moderna",
        "cidade": "Cabreúva",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": 2,
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 3
            },
            {
                "chave": "Sala",
                "valor": "Espaçosa"
            }
        ]
    },
    {
        "id": 7,
        "url_foto": "img/7.jpg",
        "nome": "Casa do campo",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": 2,
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 2
            },
            {
                "chave": "Tamanho",
                "valor": "Pequena"
            }
        ]
    },
    {
        "id": 8,
        "url_foto": "img/8.jpg",
        "nome": "Casa média",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": 2,
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 3
            },
            {
                "chave": "Suíte",
                "valor": 1
            }
        ]
    },
    {
        "id": 9,
        "url_foto": "img/9.jpg",
        "nome": "Apartamento",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": 1,
        "adicionais": []
    },
    {
        "id": 10,
        "url_foto": "img/10.jpg",
        "nome": "Mansão moderna",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": 2,
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 2
            },
            {
                "chave": "Suíte",
                "valor": 1
            }
        ]
    }
]

function buscarTodosImoveis() {
    return imoveisDB
}

function buscarImovelPeloId(id) {
    for (let i=0; i < imoveisDB.length; i++) {
        const imv = imoveisDB[i]

        if (imv.id == id) {
            return imv 
        }
    }
}

