import readline from "node:readline";
import { query } from "../services/llm.service.js";

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

export const startChat=()=>{
    rl.question('Enter the file path: ',async(filePath)=>{
        console.log('File loaded. Ask questions about it or type "exit" to quit.');

        const askQuestion=()=>{
            rl.question('You: ',async(userInput)=>{
                if(userInput.toLowerCase()==='exit'){
                    console.log('Exiting chat...');
                    rl.close();
                    return;
                }
                if(userInput.toLowerCase()==='newfile'){
                    return startChat();
                }

                await query(filePath,userInput);
                askQuestion();
            });
        };
        askQuestion()
    });
};