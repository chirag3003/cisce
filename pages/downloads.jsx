import Seo from "components/Seo";
import MainLayout from "components/Layouts/Main";
import Axios from "helpers/Axios";
import cheerio from "cheerio";
import Downloads from "components/Downloads";

export default function Home(props) {
    return (
        <div>
            <Seo />
            <MainLayout>
                <Downloads groups={props.groups} />
            </MainLayout>
        </div>
    );
}

export async function getStaticProps(context) {
    const { data } = await Axios.get("/downloads.aspx");
    const $ = cheerio.load(data);
    const groups = $(".accordion-cstm")
        .toArray()
        .map((item) => {
            let group = $(item);
            const links = group
                .find("a")
                .toArray()
                .map((link) => {
                    return {
                        title: $(link).text(),
                        href: $(link).attr("href"),
                    };
                });

            return {
                title: group.find("h4").text(),
                links,
            };
        });
    groups.splice(0, 1);

    return {
        props: {
            groups: groups,
        },
        revalidate:1000,
    };
}
