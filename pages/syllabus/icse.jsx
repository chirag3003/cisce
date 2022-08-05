import Seo from "components/Seo";
import HomePage from "components/Home";
import MainLayout from "components/Layouts/Main";
import Axios from "helpers/Axios";
import cheerio from "cheerio";
import Syllabus from "components/Syllabus";

export default function Home(props) {
    return (
        <div>
            <Seo />
            <MainLayout>
                <Syllabus data={props.list} title={"ICSE Syllabus 2023"} />
            </MainLayout>
        </div>
    );
}

export async function getStaticProps() {
    const { data } = await Axios.get("/publicationdetail.aspx?id=102");
    const $ = cheerio.load(data);
    const list = $(".download-wrapper a")
        .toArray()
        .map((item) => {
            return {
                title: $(item).text(),
                link: $(item).attr("href"),
            };
        });
    return {
        props: {
            list,
        },
        revalidate: 1000,
    };
}
