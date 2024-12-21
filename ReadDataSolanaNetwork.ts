import {Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL} from "@solana/web3.js";

export class ReadDataSolanaNetwork{

    // Function to connect to the Solana network
    public static getConnection(): Connection {
        const connection = new Connection(clusterApiUrl("devnet"),"finalized");
        console.log(`✅ Connected!`);
        return connection;
    }

    // Function to get the balance (in lamport) of a public key
    public static async getBalanceInLamport(connection: Connection, address: PublicKey): Promise<number> {
        const balance = await connection.getBalance(address);
        console.log(`The balance of the account at ${address} is ${balance} lamports`);
        console.log(`✅ Finished!`);
        return balance;
    }

    // Function to get the balance (in SOL) of a public key
    public static async getBalanceInSol(connection: Connection, address: PublicKey): Promise<number> {
        const balance = await connection.getBalance(address);
        const balanceInSol = balance / LAMPORTS_PER_SOL;
        console.log(
            `✅ Finished! The balance for the wallet at address ${address} is ${balanceInSol}!`,
        );
        return balanceInSol;
    }

    public static async main(){
        const connection = this.getConnection();
        const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
        await this.getBalanceInLamport(connection, address);
        await this.getBalanceInSol(connection, address);
    }
}