import WhatsAppLogo from "../assets/Whatsapp.svg";
import TwitterLogo from "../assets/Twitter.svg";
import InstagramLogo from "../assets/Instagram.svg";
import SnapChatLogo from "../assets/SnapChat.svg";
import TiktokLogo from "../assets/Tiktok.svg";

interface SocialPlatform {
  key: string;
  title: string;
  logo: React.ComponentType;
}

export const socialPlatforms: SocialPlatform[] = [
  {
    key: "whatsapp",
    title: "WhatsApp",
    logo: WhatsAppLogo,
  },
  {
    key: "twitter",
    title: "Twitter",
    logo: TwitterLogo,
  },
  {
    key: "instagram",
    title: "Instagram",
    logo: InstagramLogo,
  },
  {
    key: "snapchat",
    title: "Snap Chat",
    logo: SnapChatLogo,
  },
  {
    key: "tiktok",
    title: "Tik Tok",
    logo: TiktokLogo,
  },
];
