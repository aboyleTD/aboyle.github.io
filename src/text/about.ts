import { getLanguage } from "../services/settings";
import type { LocalizedString } from "./cvText";
import selfImg from "../assets/pictures/self.jpg";
// import selfImgSuitCropped from "../assets/pictures/self_suit1_cropped.jpg";
import selfImgSuit2Cropped from "../assets/pictures/self_suit2_cropped.jpg";

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


const aboutMe : LocalizedString = {
    en: `I am a computer scientist with expertise in developing AI systems and providing insights into their workings. I have broad strengths in machine learning, including computer vision (CV), natural language processing (NLP), and explainable AI (XAI).\n
    During my bachelor's studies I first built a strong theoretical foundation in computer science. Towards the end of my studies I began focusing on machine learning. I took the introductory machine learning course a year earlier than intended in the curriculum and wrote my bachelor's thesis on neural motion retargeting at the interactive geometry lab under Prof. Olga Sorkine-Hornung.\n
    I started my master's degree with an exchange at the Miyao Lab at the University of Tokyo, where I delved into cutting-edge research in NLP. Back at the ETH, I published two papers under the IVIA lab under Prof. Mennatallah El-Assady at the intersection of NLP and interactive machine learning, while continuing my studies on advanced machine learning topics. \n
    Finally, I returned to the Miyao lab to write my master's thesis under joint supervision with the IVIA lab. In my thesis I developed a method for measuring the limitations of XAI methods in explaining AI models, particularly large language models.`,
    
    jp: `私はAIシステムの開発と解釈に専門性を持つコンピュータサイエンティストでございます。コンピュータビジョン、自然言語処理、解釈可能性を含む機械学習全般に幅広い強みを持っております。

　学士課程では、コンピュータサイエンスの強固な理論的基盤を築き、学士課程の終わりに機械学習に専念することを決意いたしました。カリキュラムより一年早く機械学習の入門コースを受講し、Olga Sorkine-Hornung教授のIGラボにてNeural Motion Retargetingに関する学士論文を執筆いたしました。

　修士課程は東京大学の宮尾研究室への交換留学から始まり、自然言語処理の最先端研究に携わりました。ETHに戻ってからは、Mennatallah El-Assady教授のIVIAラボにて自然言語処理とインタラクティブ機械学習の交点で二本の論文を発表し、引き続き先端的な機械学習のトピックを学んでまいりました。その中で特にコンピュータビジョンと自然言語処理に注力いたしました。

　最後に、IVIAラボとの共同指導のもと、宮尾研究室に戻り修士論文を執筆いたしました。論文では、特に大規模言語モデルに対するAIモデルの解釈可能性におけるXAI手法の理論的な限界を測定する手法を開発いたしました。
`,
}

export const getAboutMe = (): string => {
    const language = getLanguage();
    if (language == "en") {
        return aboutMe.en;
    } else if (language == "jp" && aboutMe.jp) {
        return aboutMe.jp;
    }
    return aboutMe.en;
};


export const getSelfImg = (): string => {
    const language = getLanguage();
    switch (language) {
        case "en":
            return selfImg;
        case "jp":
            return selfImgSuit2Cropped;
        default:
            return selfImg;
    }
};