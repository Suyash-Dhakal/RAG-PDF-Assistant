import { AzureOpenAIEmbeddings, AzureChatOpenAI } from "@langchain/openai";
import 'dotenv/config';

export const embeddings=new AzureOpenAIEmbeddings({
    azureOpenAIApiKey: process.env.AZURE_OPENAI_API_EMBEDDINGS_KEY,
    azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_EMBEDDINGS_INSTANCE_NAME,
    azureOpenAIApiEmbeddingsDeploymentName: process.env.AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME,
    azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_EMBEDDINGS_VERSION,
})

export const llm=new AzureChatOpenAI({
    model: "gpt-4-32k",
    temperature: 0,
    azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
    azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME,
    azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME,
    azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION,
})