import {NextPage} from "next";
import {useRouter} from "next/router";

const Page: NextPage = () => {
    const router = useRouter();
    const { name } = router.query;
    return <p>{name}</p>;
};
export default Page;