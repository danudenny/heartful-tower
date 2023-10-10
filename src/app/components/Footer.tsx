import { FooterSocialMedia } from "@/app/components/FooterSocialMedia";
import { FooterMenu } from "@/app/components/FooterMenu";

export const Footer = () => {
  return (
    <div className="footer-container bg-primary">
      <div className="footer flex justify-center flex-col items-center container mx-auto gap-10">
        <h1>Logo</h1>
        <p className="text-center">
          We take great pride in ensuring the satisfaction of Our Customers
        </p>
        <FooterSocialMedia />
        <hr style={{ width: "100%", border: "1px solid #333" }} />
        <FooterMenu />
      </div>
    </div>
  );
};
