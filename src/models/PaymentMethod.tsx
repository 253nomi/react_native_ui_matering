import CashLogo from "../assets/Cash.svg";
import VisaLogo from "../assets/Visa.svg";
import MastercardLogo from "../assets/MasterCard.svg";

export const paymentMethods: PaymentMethod[] = [
  {
    label: "Cash",
    icon: CashLogo,
  },
  {
    label: "Visa",
    icon: VisaLogo,
  },
  {
    label: "Mastercard",
    icon: MastercardLogo,
  },
];

interface PaymentMethod {
  label: string;
  icon: React.ComponentType;
}

export interface PaymentMethodListProps {
  paymentMethods: PaymentMethod[];
}
