import { connectToDatabase } from "../util/mongodb";


export async function getServerSideProps(context){
    const {client } = await connectToDatabase()
    const isConnected = await client.isConnected()
    return {
        props: {isConnected}
    }

}