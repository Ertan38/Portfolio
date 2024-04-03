import port from "./images/port.png";
const projecten = [
    {
        id: "1" ,
        name: "Project 1",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam neque nisi ullam ut quis optio nam libero qui reprehenderit porro labore dignissimos accusantium consectetur ",
        img: port,
        link: "https://github.com/Ertan38/Portfolio",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam neque nisi ullam ut quis optio nam libero qui reprehenderit porro labore dignissimos accusantium consectetur enim, possimus dolor mollitia beatae commodi
        Deleniti omnis beatae atque fugit provident earum quisquam excepturi incidunt culpa officiis. Soluta, facere in quo consequatur delectus vero iusto nulla! Quia nisi repellat accusamus et voluptates nesciunt ipsa perferendis
        Eveniet ut omnis quae modi amet necessitatibus dolore reprehenderit odio commodi perferendis ad dignissimos libero, esse nostrum, sapiente ducimus, fugiat nesciunt cupiditate officia inventore in? Voluptate quisquam at eveniet ipsa
        Recusandae atque nesciunt aspernatur blanditiis culpa fugit deserunt modi ducimus deleniti saepe qui, magni quasi officia sequi? Rerum amet, temporibus voluptatibus culpa, libero qui aperiam, beatae natus commodi placeat vitae.`
    }, 
    {
        id: "2",
        name: "Portfolio",
        description: "Dit document beschrijft de functionele, niet-functionele en technische eisen voor de ontwikkeling van mijn persoonlijke portfolio website.",
        img: port,
        link: "https://github.com/Ertan38/Portfolio",
        content: `
        <h2>1. Inleiding</h2>
        <p>Dit document beschrijft de functionele en niet-functionele eisen voor de ontwikkeling van een persoonlijke portfolio website met behulp van Remixjs. Het doel van deze website is om een professionele online aanwezigheid te creëren waarin ik projecten, vaardigheden, en contactinformatie kan delen.</p>
        <h2>2. Functionele Eisen</h2>
        <h3>2.1 Homepagina</h3>
            <ul>
            <li><strong>Doel:</strong> Dient als het startpunt voor bezoekers, geeft een overzicht van de website.</li>
            <li><strong>Eisen:</strong>
                <ul>
                    <li>Een welkomstboodschap/een korte introductie of samenvatting van mijzelf.</li>
                    <li>Moet links bevatten naar de andere secties van de website (Projecten, About, Contact, CV).</li>
                </ul>
            </li>
            </ul>
        <h3>2.2 Projectoverzicht Pagina</h3>
            <ul>
            <li><strong>Doel: </strong>Toont een overzicht van projecten die ik heb gemaakt.</li>
            <li><strong>Eisen:</strong>
                <ul>
                    <li>Lijst van projecten, elk met een korte beschrijving.</li>
                    <li>Elke projectvermelding moet linken naar een gedetailleerde projectpagina.</li>
                    <li>(Projecten kunnen worden gesorteerd of gefilterd op type, technologie, of datum.)</li>
                </ul>
            </li>
            </ul>

        <h3>2.3 Project Detail Pagina</h3>
        <ul>
            <li><strong>Doel:</strong> Geeft gedetailleerde informatie over een specifiek project.</li>
            <li><strong>Eisen:</strong>
                <ul>
                    <li>Moet uitgebreide informatie over het project bevatten, inclusief de doelstellingen, gebruikte technologieën, en het eindresultaat.</li>
                    <li>Afbeeldingen of video's die het project demonstreren.</li>
                    <li>Links naar de code repositories (GitHub).</li>
                </ul>
            </li>
        </ul>

        <h3>2.4 About Pagina</h3>
        <ul>
            <li><strong>Doel:</strong> Biedt een diepgaande blik op de professionele achtergrond van mij.</li>
            <li><strong>Eisen:</strong>
                <ul>
                    <li>Persoonlijke en professionele introductie.</li>
                    <li>Overzicht van vaardigheden.</li>
                    <li>Professionele ervaring en opleiding.</li>
                </ul>
            </li>
        </ul>

        <h3>2.5 Contact Pagina</h3>
        <ul>
            <li><strong>Doel:</strong> Stelt bezoekers in staat om contact op te nemen met de eigenaar.</li>
            <li><strong>Eisen:</strong>
                <ul>
                    <li>Contactformulier met velden voor naam, e-mail, onderwerp, en bericht.</li>
                    <li>Informatie over andere manieren om contact op te nemen (e-mailadres, sociale media links).</li>
                </ul>
            </li>
        </ul>

        <h3>2.6 CV</h3>
        <ul>
            <li><strong>Doel:</strong> Biedt een downloadbare of zichtbare versie van het CV van de eigenaar.</li>
            <li><strong>Eisen:</strong> Link of knop om het CV in PDF-formaat te downloaden.</li>
        </ul>

        <h2>3. Niet-functionele Eisen</h2>
        <h3>3.1 Prestatie</h3>
        <p>De website moet snel laden en responsief zijn op alle apparaten.</p>

        <h3>3.2 Schaalbaarheid</h3>
        <p>De websitearchitectuur moet schaalbaar zijn om gemakkelijk nieuwe projecten of pagina's toe te voegen.</p>

        <h2>4. Levering</h2>
        <ul>
            <li>Project Planning: De website moet binnen 6 weken af zijn.</li>
            <li>Hosting: De website moet worden gehost op een betrouwbaar platform dat HTTPS ondersteunt.</li>
        </ul>
         `
    }, 
    {
        id: "3",
        name: "Project 3",
        description: "Lorem ipsum",
        img: "https://placehold.jp/250x250.png",
        link: "https://github.com/Ertan38/Portfolio",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam neque nisi ullam ut quis optio nam libero qui reprehenderit porro labore dignissimos accusantium consectetur enim, possimus dolor mollitia beatae commodi
        Deleniti omnis beatae atque fugit provident earum quisquam excepturi incidunt culpa officiis. Soluta, facere in quo consequatur delectus vero iusto nulla! Quia nisi repellat accusamus et voluptates nesciunt ipsa perferendis
        Eveniet ut omnis quae modi amet necessitatibus dolore reprehenderit odio commodi perferendis ad dignissimos libero, esse nostrum, sapiente ducimus, fugiat nesciunt cupiditate officia inventore in? Voluptate quisquam at eveniet ipsa
        Recusandae atque nesciunt aspernatur blanditiis culpa fugit deserunt modi ducimus deleniti saepe qui, magni quasi officia sequi? Rerum amet, temporibus voluptatibus culpa, libero qui aperiam, beatae natus commodi placeat vitae.`
    }, 
    {
        id: "4",
        name: "Project 4",
        description: "Lorem ipsum",
        img: "https://placehold.jp/300x300.png",
        link: "https://github.com/Ertan38/Portfolio",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam neque nisi ullam ut quis optio nam libero qui reprehenderit porro labore dignissimos accusantium consectetur enim, possimus dolor mollitia beatae commodi
        Deleniti omnis beatae atque fugit provident earum quisquam excepturi incidunt culpa officiis. Soluta, facere in quo consequatur delectus vero iusto nulla! Quia nisi repellat accusamus et voluptates nesciunt ipsa perferendis
        Eveniet ut omnis quae modi amet necessitatibus dolore reprehenderit odio commodi perferendis ad dignissimos libero, esse nostrum, sapiente ducimus, fugiat nesciunt cupiditate officia inventore in? Voluptate quisquam at eveniet ipsa
        Recusandae atque nesciunt aspernatur blanditiis culpa fugit deserunt modi ducimus deleniti saepe qui, magni quasi officia sequi? Rerum amet, temporibus voluptatibus culpa, libero qui aperiam, beatae natus commodi placeat vitae.`
    }
]

export default projecten;