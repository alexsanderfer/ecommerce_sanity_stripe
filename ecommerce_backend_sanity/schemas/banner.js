export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Imagem',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'Texto do Botão',
            type: 'string',
        },
        {
            name: 'product',
            title: 'Produto',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Descrição',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'Texto Menor',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'Texto Médio',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'Texto Grande',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'Texto Grande 2',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Desconto',
            type: 'string',
        },
        {
            name: 'saleTime',
            title: 'Tempo de Venda',
            type: 'string',
        },
    ],
};

// Vídeo pausado em 24:32