import { llm } from "../config/azureConfig";
import { loadStore } from "./pdf.service";

export const query=async (filePath,question)=>{
    const store=await loadStore(filePath);
    const results=await store.similaritySearch(question,2);

    const response=await llm.invoke([
    ["system", "You are a helpful AI assistant. Answer questions using the provided context. If unsure, say you need more context."],
    ["human", `Question: ${question}\nContext: ${results.map(r => r.pageContent).join('\n')}`]
    ]);

    console.log(`\nAI: ${response.content}\n`);
}