import Seo from "components/Seo";
import HomePage from "components/Home";
import MainLayout from "components/Layouts/Main";
import Axios from "helpers/Axios";
import cheerio from "cheerio";

export default function Home(props) {
    console.log(props);
    return (
        <div>
            <Seo />
            <MainLayout>
                <HomePage data={props} />
            </MainLayout>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { data } = await Axios.get("/");
    const $ = cheerio.load(data);

    function getLinks(lists) {
        const links = [];
        for (let i = 0; i < lists.length; i++) {
            let list = lists[i];
            links.push({
                title: $(list).text(),
                href: `https://cisce.org/${$(list).find("a").attr("href")}`,
            });
        }
        return links;
    }
    const icse = {
        title: $("#second-menu h2").text(),
        description: $("#second-menu .dropdown-left-content p").first().text(),
        links: getLinks($("#second-menu ul li").toArray()),
    };
    const isc = {
        title: $("#third-menu h2").text(),
        description: $("#third-menu .dropdown-left-content p").first().text(),
        links: getLinks($("#third-menu ul li").toArray()),
    };

    return {
        props: {
            icse,
            isc,
        },
    };
}
