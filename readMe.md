# RAG-PDF-Assistant

This project demonstrates a Node.js-based chatbot application using Azure OpenAI services, specifically following the RAG (Retrieval-Augmented Generation) architecture. The architecture includes loading PDF documents, embedding text using Azure's OpenAI embeddings, storing the embeddings in memory, and querying them with a language model (LLM). RAG is implemented by retrieving relevant PDF content from a vector store and augmenting the LLM's generation with this context.

## Project Structure

### Configuration: `azureConfig.js`
- Imports Azure services for embeddings and language model (LLM).
- Fetches API keys and other details from `.env`.
- Uses both **AzureOpenAIEmbeddings** and **AzureChatOpenAI** models.

### LLM Service: `llm.service.js`
- Loads the vector store from a PDF file.
- Executes a similarity search on the embedded data.
- Queries the language model for responses based on the context provided by the similarity search results.

### PDF Service: `pdf.service.js`
- Loads PDF documents using `PDFLoader`.
- Splits the documents into smaller chunks for better context embedding.
- Creates an in-memory vector store for the documents using `MemoryVectorStore`.

### Readline Handler: `readlineHandler.js`
- Manages the interactive console interface.
- Loads a PDF and allows the user to ask questions about its content.

### Entry Point: `index.js`
- Initializes the chatbot and provides options to quit or upload a new file.

## How It Works
1. **User Interaction:** The user provides a PDF file path through the console.
2. **PDF Loading:** The PDF is loaded and split into smaller text chunks.
3. **Text Embedding:** The chunks are embedded using Azure OpenAI embeddings.
4. **Vector Store Creation:** The embedded chunks are stored in an in-memory vector store.
5. **Query Handling:** User questions trigger a similarity search on the vector store.
6. **LLM Query:** The top results are sent to the language model for generating a response.


## Potential Improvements
- **Local LLM Models:** Since this functions as a local personal assistant, using an open-source language model like **LLaMA (7B or 13B parameters)** could be beneficial if you have sufficient hardware resources. This would reduce dependency on cloud services and offer more control over the data.
- **Persistent Vector Storage:** Instead of an in-memory vector store, consider using a persistent vector database like **FAISS** or **ChromaDB** for better scalability.
- **Optimized Chunking:** Fine-tune the chunking strategy to balance context size and performance.


## Technologies Used
- Node.js
- LangChain.js
- Azure OpenAI (Embedding & LLM models)
- Vector Stores (in-memory)



