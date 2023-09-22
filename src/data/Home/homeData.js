import {
    GlobeAltIcon,
    CurrencyDollarIcon,
    WalletIcon,
} from "@heroicons/react/24/outline";
import { FaMobile } from "react-icons/fa";


export const MAIN_DATA = [
    {
        name: "polo",
        price: 0.01,
        time: "16: 21: 01",
        image: "https://www.innovill.com/shopimages/juinnovill/006000129681.jpg?1694745940",
        rotation: "-rotate-[12deg]",
        scale: "scale-[.8]",
        direction: "left-0 right-[unset] lg:left-[unset] lg:right-[120px]",
    },
    {
        name: "Burberry",
        price: 0.02,
        time: "12: 21: 01",
        image: "https://assets.burberry.com/is/image/Burberryltd/709BA03F-AA3A-4863-B55F-E86BF44E760C?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
        zIndex: "z-10",
        direction: "right-[unset] lg:right-[60px]",
    },
    {
        name: "Happy Jolly #14",
        price: 0.01,
        time: "08: 21: 01",
        image: "https://assets.burberry.com/is/image/Burberryltd/603C9580-3210-46A0-9E90-0EA631ACCF10?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
        rotation: "rotate-[12deg]",
        scale: "scale-[.8]",
        direction: "right-0",

    }
];

export const FAQ_DATA = [
    {
        name: "Which country is primarily served, and is it exclusive to Koreans?",
        description: `Our primary audience is Korean, but Korea Market is open to customers from around the world. We welcome everyone to explore our platform, connect with Korean sellers, and discover authentic treasures. While our focus is on serving the Korean community, our doors are wide open to all who wish to experience the richness of Korean culture and craftsmanship. Join us today and be part of our global community!`,
        icon: GlobeAltIcon,
        color: "bg-violet-500",
    },
    {
        name: "Is it available as a mobile app as well?",
        description:
            "At the moment, it's not available as a mobile app, but we plan to launch one in the near future.",
        icon: FaMobile,
        color: "bg-blue-500",
    },
    {
        name: "How are the costs structured? Is it in dollars or Korean won?",
        description: `Our platform is designed for direct transactions, so whether it's in dollars or Korean won, it doesn't matter. One of the advantages of our site is that when you list a product, it automatically calculates the currency exchange based on the country, making it convenient for both local and international users. This feature ensures a seamless and user-friendly experience for all our members. Join us today to experience the simplicity and flexibility of Korea Market`,
        icon: CurrencyDollarIcon,
        color: "bg-green-500",
    },
    {
        name: "How do I make a purchase?",
        description: `1. Search for the desired product using categories or product names.
        2. Click on the product to enter its details and confirm if it meets your criteria. Check the cost, which includes currency conversion.
        3. Choose a date, add any necessary notes, and specify the location. Click the 'Reserve' button located in the upper right corner.
        4. Once the date and location are confirmed, proceed with the direct transaction.
        5. To ensure trustworthiness for future transactions, both parties may rate each other with a trust score.
        `,
        icon: WalletIcon,
        color: "bg-orange-500",
    },
];