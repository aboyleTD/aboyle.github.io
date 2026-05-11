import { getLanguage } from "../services/settings";

export interface Script {
    greetings: string;
    greetingsQ: string;
    aboutMe: string;
    aboutMeQs: string[];
    aboutMeFollowUps: string[];
    closerQ: string;
    closer: string;
    reset: string;
}

const englishScript: Script = {
    greetings: "Hi, my name is Alan.",
    greetingsQ: "Hi, what do you do?",
    aboutMe: "I help people develop and get insight into AI systems.",
    aboutMeQs: [
        "What are your interests?",
        "What languages do you speak?",
        "What kind of projects have you worked on?"
    ],
    aboutMeFollowUps: [
        "My main interests are  NLP, XAI, and Human-AI interaction.",
        "I speak German, English, and Japanese.",
        "I have helped develop novel AI models, explainability methods, and user interfaces.",
    ],
    closerQ: "What else can you tell me about yourself?",
    closer: "Check out the rest of the site to find out more 😉",
    reset: "Reset",
};

const japaneseScript: Script = {
    greetings: "こんにちは、アランと申します。",
    greetingsQ: "こんにちは、どんな活躍をされていますか？",
    aboutMe: "AIシステムの開発と洞察をご提供致します。",
    aboutMeQs: [
        "どんなことに興味がありますか？",
        "どの言語が話せますか？",
        "どんなプロジェクトに携わってきましたか？"
    ],
    aboutMeFollowUps: [
        "主な興味はNLP、XAI、人間とAIの相互作用でございます。",
        "ドイツ語、英語、日本語が話せます。",
        "新しいAIモデル、解釈方法、ユーザーインターフェースの開発に携わってきました。",
    ],
    closerQ: "他にも教えてください。",
    closer: "詳しくは他の部分もご覧ください 😉",
    reset: "もう一度"
};

export const getScript = (): Script => {
    const language = getLanguage();
    switch (language) {
        case "en":
            return englishScript;
        case "jp":
            return japaneseScript;
        default:
            return englishScript;
    }
}