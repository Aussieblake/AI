async function summarizeText() {
    const inputText = document.getElementById("inputText").value;
  
    // Load the Universal Sentence Encoder model
    const model = await use.load();
    
    // Generate embeddings for the input text
    const embeddings = await model.embed([inputText]);
  
    // Example: Display embedding size as a placeholder summary
    const embeddingData = embeddings.arraySync();
    const summary = `Processed your text. Embedding size: ${embeddingData[0].length}`;
  
    document.getElementById("outputText").innerText = summary;
  }
  