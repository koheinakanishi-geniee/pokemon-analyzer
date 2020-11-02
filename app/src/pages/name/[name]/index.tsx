import {NextPage} from "next";
import {useRouter} from "next/router";

const Page: NextPage = () => {
    const router = useRouter();
    const { name } = router.query;
    return (
        <script src={"https://log.ma-jin.jp/ma.js?acid=1130"}></script>
        <p>{name}</p>
    )
};
export default Page;