import mongoose from "mongoose";
import {Nitro} from "nitropack"

export default async (_nitroApp: Nitro) => {
    const config = useRuntimeConfig()
    await mongoose.connect(config.mongodbUri)
    console.info(`Successfully connected to the database ${config.mongodbUri} ✅`);
}