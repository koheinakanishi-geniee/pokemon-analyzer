import {GetServerSideProps, GetStaticProps, NextPage} from 'next'
import { NextComponentType } from "next"
import React from "react";
import {invoke} from "../../Repogitory/invoke";

interface Props {
    data:string
}


const Page: NextPage<Props> = (props:Props) => {
    return <div>{props.data}</div>
}




export const getServerSideProps: GetServerSideProps = async () => {
    const json_res = await invoke("")
    return {
        props: {
            data: JSON.stringify(json_res)
        }
    }
}

export default Page