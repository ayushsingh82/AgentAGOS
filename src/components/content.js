// Sample content for the agent to read
export const agentScripts = [
  "Hello everyone! Welcome to the AGOS experience. I'm your AI host for today.",
  "AGOS represents a breakthrough in AI technology, combining multilingual support with emotional intelligence.",
  "Our unique architecture allows us to create agent personalities that adapt to your specific needs.",
  "Some of our key features include natural voice creation, memory systems, and seamless integration across platforms.",
  "With AGOS, you can create agents that speak and understand multiple languages fluently.",
  "Users can generate unique voices with simple prompts like 'Warm, friendly male voice in his 30s'.",
  "AGOS agents can be integrated across different applications and social channels with minimal setup.",
  "Staking $AGOS allows you to earn a share of revenue and gain early access to new features.",
  "We're constantly improving our neural networks to create more human-like interactions.",
  "Thank you for joining us. Feel free to ask any questions in the chat!",
  "​As of March 24, 2025, the Aptos ecosystem has experienced significant growth and development, solidifying its position as a leading Layer 1 blockchain platform. Founded by former Meta developers Mo Shaikh and Avery Ching, Aptos has rapidly expanded its infrastructure, partnerships, and decentralized applications (dApps), contributing to its robust and dynamic ecosystem.",
  "Aptos has introduced several technological innovations to enhance its scalability and performance. Notably, the launch of Shardines, a sharded execution engine, aims to provide infinite horizontal scalability, allowing the network to handle an increasing number of transactions without compromising speed or security. Additionally, the integration of the Move programming language, initially developed for Meta's Diem project, offers a secure and flexible environment for writing smart contracts, attracting developers to build sophisticated dApps on the platform.",
  "Thala Labs: A DeFi platform known for ThalaSwap, a decentralized exchange offering fast, secure trading with low fees. Thala Labs has significantly impacted the Aptos DeFi landscape by providing essential infrastructure and services that attract both retail and institutional investors. ",
  "Petra Wallet: Developed by Aptos Labs, Petra is a user-friendly, self-custodial web3 wallet designed for the Aptos blockchain. It supports a wide range of functionalities, including the creation and viewing of NFTs and interaction with various dApps within the ecosystem.",
  "Merkle Trade: A gamified perpetual decentralized exchange (DEX) offering up to 100x leverage on assets like APT and BTC. Launched in December 2024, it processed over $500 million in volume within its first two months, leveraging Aptos's speed for instant trade execution."
];

// Function to convert a script for voice (adding pauses, emphasis, etc.)
export const formatForSpeech = (text) => {
  // Add small pauses for commas and longer pauses for periods
  return text
    .replace(/,/g, ', <break time="300ms"/> ')
    .replace(/\./g, '. <break time="700ms"/> ');
}; 