import { Keypair } from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

class CryptographySolanaNetwork{
    public static createKeypair(): Keypair{
        const keypair = Keypair.generate();

        console.log(`The public key is: `, keypair.publicKey.toBase58());
        console.log(`The secret key is: `, keypair.secretKey);
        return keypair
    }

    public static loadPayerSecretKey(): Keypair{
        const wallet = getKeypairFromEnvironment("SECRET_KEY");

        console.log(
            `✅ Finished! We've loaded our secret key securely, using an env file!`,
        );

        return wallet;
    }

}


