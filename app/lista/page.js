import { Navbar } from "../components/navbar"
import { GiftCard } from "../components/giftCard";
import { Footer } from "../components/footer";

export default function Lista() {

    const cardData = [
        {
            id: 1,
            title: "Alexa",
            description: "Alexa (para a noiva não mandar só no noivo)",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1154857007426306068/images.png",
            price: "310,00",
            productUrl: "https://pag.ae/7ZR2iTvsJ"
        },
        {
            id: 2,
            title: "Adote um boleto",
            description: "Adote um boletinho atrasado! Tem de várias cores, são tão lindos!... Você não vai se arrepender!",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1154851857211084891/2222699065a5953cef6.png",
            price: "900,00",
            productUrl: "https://pag.ae/7ZR2Jrkeu"
        },
        {
            id: 3,
            title: "Aposentadoria dos Noivos",
            description: "Aquela ajudinha para aposentadoria",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1154856146419601408/images.png",
            price: "1040,00",
            productUrl: "https://pag.ae/7ZR2hMgsQ"
        },
        {
            id: 4,
            title: "Aluguel Atrasado!",
            description: "Ajuda nos 14 meses de aluguel atrasado",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1154856528269029417/2Q.png",
            price: "500,00",
            productUrl: "https://pag.ae/7ZR2inxEu"
        },
        {
            id: 5,
            title: "Parente do Ano!",
            description: "Seja o nosso parente preferido! Grande oportunidade!",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1159458181928472657/Imagem_Parente_do_Ano.png",
            price: "3200,00",
            productUrl: "https://pag.ae/7ZRof3DQq"
        },
        {
            id: 6,
            title: "Olha o aviãozinho",
            description: "Aviãozinho de dinheiro do Silvio Santos",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1154857632864145551/images.png",
            price: "100,00",
            productUrl: "https://pag.ae/7ZR2kM6m5"
        },
        {
            id: 7,
            title: "Diarista",
            description: "Garanta a limpeza do cafofo do amor",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1154858881781084180/padr-c3-a3o-foto5-6.png",
            price: "200,00",
            productUrl: "https://pag.ae/7ZR2k5CHQ"
        },
        {
            id: 8,
            title: "Kit de Churrasco de Patrão",
            description: "O Noivo garante que você será convidado",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1154859306462760980/kit-churrasco-tabua-conj-garfo-chaira-e-faca-personalizados-tabua-teca-personalizada.png",
            price: "400,00",
            productUrl: "https://pag.ae/7ZR2viR2L"
        },
        {
            id: 9,
            title: "10 Engradados de Original",
            description: "Excelente presente! Para a noiva, o melhor!",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1154859687351693372/quadro-decorativo-bar-boteco-cerveja-original-antarctica-quadrodecerveja.jpg",
            price: "250,00",
            productUrl: "https://pag.ae/7ZR2oPkNL"
        },
        {
            id: 10,
            title: "Ajude a pagar o cartão",
            description: "Sério, da até medo da fatura",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1154860001492476004/cartao-de-credito-5.png",
            price: "650,00",
            productUrl: "https://pag.ae/7ZR2p7Ug5"
        },
        {
            id: 11,
            title: "Lingerie Chic",
            description: "Para a noiva usar na noite de núpcias",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1158032418138230904/main-qimg-a7d4d5da4b11e7abb661f94f2de25473-lq.png",
            price: "155,00",
            productUrl: "https://pag.ae/7ZR2KuE-u"
        },
        {
            id: 12,
            title: "Cueca Chic",
            description: "Para o noivo usar na noite de núpcias",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1154860794744410182/70c37c6263fce611a628b6954cf694d1.png",
            price: "60,00",
            productUrl: "https://pag.ae/7ZR2qbu19"
        },
        {
            id: 13,
            title: "Jantar para os noivos",
            description: "Jantar para o primeiro dia de casados",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1154861614881833081/15036220.png",
            price: "75,00",
            productUrl: "https://pag.ae/7ZR2wHsb5"
        },
        {
            id: 14,
            title: "Aluguel de Bebê",
            description: "Aluguel de um bebê para treinamento",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1154861886106501231/saude-bebe-20160727-02.png",
            price: "750,00",
            productUrl: "https://pag.ae/7ZR2wsPeo"
        },
        {
            id: 15,
            title: "Passeio de Balão",
            description: "Volta ao mundo em 80 dias... em um balão",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1157393650863575201/9k.png?ex=65187255&is=651720d5&hm=028f054f3d8900e67d709cb7a826788d4c9d84d52bdc1de3155e693fb17635a3&",
            price: "800,00",
            productUrl: "https://pag.ae/7ZR2weQzu"
        },
        {
            id: 16,
            title: "Presente Econômico",
            description: "Só pra dizer que não dei nada...",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1157393818568634378/images.png?ex=6518727d&is=651720fd&hm=4afdd11e0f3d0694aaafe1ae0f8b0d105cb11d777b69991b1e8f6e3783d022cb&",
            price: "32,00",
            productUrl: "https://pag.ae/7ZR2vH6nJ"
        },
        {
            id: 17,
            title: "Tábua de cortar",
            description: "Todo masterchef precisa de uma",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1157394167845113956/71KxG6cj13L.png?ex=651872d0&is=65172150&hm=30865907caa854f405213133403859c8cb1cdd4c2fdd491da89dfbb2e26fd28b&",
            price: "81,00",
            productUrl: "https://pag.ae/7ZR2v-rr5"
        },
        {
            id: 18,
            title: "Torradeira",
            description: "Para um café da manhã reforçado",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1157394299600777287/81Go5X4RJgL.png?ex=651872f0&is=65172170&hm=7528254a56f4d3b30c8c3b527d6d8658aee3fadddb934787f3eb8449996371a5&",
            price: "240,00",
            productUrl: "https://pag.ae/7ZR2toqjo"
        },
        {
            id: 19,
            title: "Rolo de macarrão da noiva",
            description: "Para quando o noivo aprontar",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1157394449681367242/fbc3508b-c041-49ad-a447-04dbc10cd081.png?ex=65187314&is=65172194&hm=a126811f398443df823c648a9a45c1aac2cac9653e751b0ab08093dfc885f509&",
            price: "130,00",
            productUrl: "https://pag.ae/7ZR2u8q2L"
        },
        {
            id: 20,
            title: "Capacete contra rolo de macarrão",
            description: "Para o noivo se proteger quando necessário!",
            imageUrl: "https://cdn.discordapp.com/attachments/736993448124481619/1157394680410021938/Youth_Football_Helmet_Red_1500x.png?ex=6518734b&is=651721cb&hm=9261fc606d1fd6b3e14f5e3aa3e850fa5de61e9c2c2fc8e257092bfdacae7aad&",
            price: "225,00",
            productUrl: "https://pag.ae/7ZR2uu2pq"
        },
    ];

    return (
        <main className="flex flex-col items-center bg-[#e8e6e7]">
            <Navbar />
            <div className="px-6 pt-44 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16">
                <section className="flex flex-col items-center w-full">
                    <h1 className="text-3xl font-vibes text-lime-800 mb-8 sm:text-5xl">
                        Lista de Casamento Virtual
                    </h1>
                    <p className="text-lg text-center font-ysra max-w-5xl sm:text-xl">
                        Queridos familiares e amigos, para nós, a presença de vocês neste dia tão especial é o maior presente que poderíamos receber. Mas, se vocês também quiserem nos presentear, ficaremos muito agradecidos.
                    </p>

                </section>
                <div className="hidden w-full h-px md:block bg-lime-800" />
                <section className="flex flex-col w-full items-center justify-between">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {cardData.map((card) => (
                            <GiftCard
                                key={card.id}
                                imageUrl={card.imageUrl}
                                title={card.title}
                                description={card.description}
                                price={card.price}
                                productUrl={card.productUrl}
                            />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}
