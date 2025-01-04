import { embeddings } from "../config/azureConfig.js";
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { CharacterTextSplitter } from 'langchain/text_splitter';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';

export const docsFromPDF=async (filePath)=>{
    const loader=new PDFLoader(filePath);
    const splitter=new CharacterTextSplitter({
        separator:". ",
        chunkSize: 2500,
        chunkOverlap: 200,
    });
    const docs=await loader.load();
    return splitter.splitDocuments(docs);
};

export const createStore=async (docs)=>{
    return MemoryVectorStore.fromDocuments(docs,embeddings);
}

export const loadStore=async (filePath)=>{
    const pdfDocs=await docsFromPDF(filePath);
    return createStore([...pdfDocs]);
}