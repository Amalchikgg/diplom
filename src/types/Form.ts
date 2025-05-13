export interface LoginForm {
  phoneNumber: string;
  password: string;
}

export interface RegisterForm {
  phoneNumber: string;
  newPassword: string;
  confirmPassword: string;
}

export interface MyDataForm {
  name: string;
  phoneNumber: string;
  birthDay: string;
}

export interface ChooseTableForm {
  date: string;
  time: string;
  guestsCount: number;
}

export interface DeliveryForm {
  approach: number;
  floor: number;
  apartment: number;
  interCom: number;
  courierComment: string;
  paymentComment: string;
}

export interface LinkCardForm {
  cardNumber: string;
  deadline: string;
  cvv: string;
  cardHolder: string;
}
