const assert = require('assert');
const cohere = require('cohere-ai');

cohere.init('M5HQvvV8KR5K9o8U5THd65iMsSJFf0y8SD8mBJpp'); // This is your trial API key

  async function hi() {
    const prompt = 'Please make flashcards out of the following information, in this format: one sentence that is a question, followed by one sentence that is the answer to that question. make it in digestible chunks, and make however many flashcards you feel appropriate.\n\nMembrane lipids are amphipathic; that is they contain both  hydrophobic and hydrophilic regions. The hydrophilic (polar)  region of the membrane lipids is their globular head; the hydrophobic (nonpolar)  regions of the membrane lipids is their fatty acid tails. The membrane lipids are organized into a continuous bilayer in which the hydrophobic regions of the phospholipids are shielded  from the aqueous environment, while the hydrophilic regions are immersed in water. In membrane lipids, proteins are found inserted into this  lipid bilayer and are classified into integral proteins and periph eral proteins. Integral proteins are anchored to membranes through a direct interaction with the lipid bilayer';

    // Check for stop sequences and invalid characters in the prompt
    //const stopSequences = ['\n', '\r', '\t', '<', '>', '&'];
   // for (const stopSequence of stopSequences) {
      //if (prompt.includes(stopSequence)) {
      //  throw new Error(`Invalid character in prompt: ${stopSequence}`);
    //  }
   // }

   const fs = require('fs');
  // let prompt = fs.readFileSync('movement.txt', 'utf-8');
  // prompt = `Please make flashcards out of the following information, in this format: pairs of sentences, with the first being a question, followed by the answer to that question. Make at least five paragraphs.\n\n${prompt}`;
      

   const response = await cohere.generate({
    model: 'command-xlarge-nightly',
    
    prompt,
    max_tokens: 300,
    temperature: 0.2,
    k: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
    });
//
    //console.log(JSON.stringify(response.body.generations))

    if (!response.body.generations) {
      throw new Error('Failed to retrieve response data');
    }

    

    const generations = response.body.generations[0].text.trim().split('\n\n');
    const result = [];
   
    //
    //console.log(result);

// original
   

    //for testing
    for (const generation of generations) {
      const [prompt, text] = generation.split('\n');
      if (prompt && text) {
        result.push({ question: prompt, answer: text });
       console.log(`Question: ${prompt}\nAnswer: ${text}\n`);
      }
    }
    

    

    assert.equal(Array.isArray(result), true);
    assert.equal(result.length > 0, true);
    assert.equal(result[0].question !== undefined, true);
    assert.equal(result[0].answer !== undefined, true);
  };

hi()