import {NextPage} from "next";
import {useRouter} from "next/router";
import React from "react";

const Page: NextPage = () => {
    const router = useRouter();
    const { name } = router.query;
    return (
        <>
            <div>
                <script src={"https://log.ma-jin.jp/ma.js?acid=1130"}/>
                <p>{name}</p>
            </div>
        </>
    );
};
export default Page;