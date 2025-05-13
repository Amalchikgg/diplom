import Image from "next/image";

export const categories = [
  { title: "secondFood", src: "/assets/icons/category.svg" },
  { title: "burgers", src: "/assets/icons/category.svg" },
  { title: "asianFood", src: "/assets/icons/category.svg" },
  { title: "spagetti", src: "/assets/icons/category.svg" },
  { title: "soups", src: "/assets/icons/category.svg" },
  { title: "pizzas", src: "/assets/icons/category.svg" },
  { title: "breakfasts", src: "/assets/icons/breakfast.svg" },
  { title: "desserts", src: "/assets/icons/category.svg" },
];

export const modifications = [
  { title: "Кетчуп", secondTitle: "+3 500 сум" },
  { title: "Чесночный соус", secondTitle: "+3 500 сум" },
  { title: "Халапеньо", secondTitle: "+3 500 сум" },
];

export const restaurantTabs = ["delivery", "takeAway", "book"];

export const tabs = [
  "Сеты",
  "Бургеры",
  "Твистеры",
  "Баскеты",
  "Боксы",
  "Лаваши",
  "Снеки",
  "Напитки",
];

export const foodCounts = [
  { title: "Сеты", count: 4 },
  { title: "Бургеры", count: 8 },
  { title: "Баскеты", count: 5 },
];

export const sectorTabs = [
  "Сектор А (1-этаж)",
  "Сектор А (2-этаж)",
  "Сектор Б (1-этаж)",
  "Сектор Б (2-этаж)",
];

export const cards = ["HUMO **3466", "Uzcard **3466"];

export const orders = [
  {
    id: 1,
    name: "Заказ #123123",
    price: "178 000 сум",
    type: "Доставка",
    info: "Заказ готовится",
  },
  {
    id: 2,
    name: "Заказ #123123",
    price: "178 000 сум",
    type: "Бронь",
    info: "Бронь добавлена",
  },
  {
    id: 3,
    name: "Заказ #123123",
    price: "178 000 сум",
    type: "Доставка",
    info: "Заказ готовится",
  },
  {
    id: 4,
    name: "Заказ #123123",
    price: "178 000 сум",
    type: "С собой",
    info: "Ждем вас",
  },
];

export const deliverySteps = [
  {
    activeImage: "/assets/icons/processGreen.svg",
    image: "/assets/icons/processGreen.svg",
    darkImage: "/assets/icons/processGreen.svg",
    text: "orderInProcess",
    successText: "orderTaken",
  },
  {
    activeImage: "/assets/icons/cookGreen.svg",
    image: "/assets/icons/cookBlack.svg",
    darkImage: "/assets/icons/cookGray.svg",
    text: "orderCook",
    successText: "orderReady",
  },
  {
    activeImage: "/assets/icons/deliveryGreen.svg",
    image: "/assets/icons/deliveryBlack.svg",
    darkImage: "/assets/icons/deliveryGray.svg",
    text: "awaitCourier",
    successText: "courierInWay",
  },
  {
    activeImage: "/assets/icons/checkGreen.svg",
    image: "/assets/icons/checkBlack.svg",
    darkImage: "/assets/icons/checkGray.svg",
    text: "orderSuccessfully",
    successText: "orderSuccessfully",
  },
];

export const bookSteps = [
  {
    activeImage: "/assets/icons/processGreen.svg",
    image: "/assets/icons/processGreen.svg",
    darkImage: "/assets/icons/processGray.svg",
  },
  {
    activeImage: "/assets/icons/checkGreen.svg",
    image: "/assets/icons/checkBlack.svg",
    darkImage: "/assets/icons/checkGray.svg",
  },
];

export const takeAwaySteps = [
  {
    activeImage: "/assets/icons/processGreen.svg",
    image: "/assets/icons/processGreen.svg",
    darkImage: "/assets/icons/processGreen.svg",
  },
  {
    activeImage: "/assets/icons/cookGreen.svg",
    image: "/assets/icons/cookBlack.svg",
    darkImage: "/assets/icons/cookGray.svg",
  },
  {
    activeImage: "/assets/icons/checkGreen.svg",
    image: "/assets/icons/checkBlack.svg",
    darkImage: "/assets/icons/checkGrey.svg",
  },
];

export const deliveryOrderSteps = [
  {
    activeImage: "/assets/icons/processGreen.svg",
    image: "/assets/icons/processGreen.svg",
    text: "orderInProcess",
    successText: "orderTaken",
  },
  {
    activeImage: "/assets/icons/cookGreen.svg",
    image: "/assets/icons/cookGray.svg",
    text: "orderCook",
    successText: "orderReady",
  },
  {
    activeImage: "/assets/icons/deliveryGreen.svg",
    image: "/assets/icons/deliveryGray.svg",
    text: "awaitCourier",
    successText: "courierInWay",
  },
  {
    activeImage: "/assets/icons/checkGreen.svg",
    image: "/assets/icons/checkGray.svg",
    text: "orderSuccessfully",
    successText: "orderSuccessfully",
  },
];

export const bookOrderSteps = [
  {
    activeImage: "/assets/icons/processGreen.svg",
    image: "/assets/icons/processGreen.svg",
    text: "orderInProcess",
    successText: "orderTaken",
  },
  {
    activeImage: "/assets/icons/checkGreen.svg",
    image: "/assets/icons/checkGray.svg",
    text: "orderSuccessfully",
    successText: "orderSuccessfully",
  },
];

export const takeAwayOrderSteps = [
  {
    activeImage: "/assets/icons/processGreen.svg",
    image: "/assets/icons/processGreen.svg",
    text: "orderInProcess",
    successText: "orderTaken",
  },
  {
    activeImage: "/assets/icons/cookGreen.svg",
    image: "/assets/icons/cookGray.svg",
    text: "orderCook",
    successText: "orderReady",
  },
  {
    activeImage: "/assets/icons/checkGreen.svg",
    image: "/assets/icons/checkGray.svg",
    text: "orderSuccessReady",
    successText: "orderSuccessReady",
  },
];

export const payTabs = [
  {
    image: (
      <Image src={"/assets/icons/cash.svg"} alt='cash' width={24} height={24} />
    ),
    activeImage: (
      <Image
        src={"/assets/icons/cashWhite.svg"}
        alt='cash'
        width={24}
        height={24}
      />
    ),
    name: "cash",
  },
  {
    image: (
      <Image
        src={"/assets/icons/paymeBlack.svg"}
        alt='payme'
        width={50}
        height={14}
      />
    ),
    activeImage: (
      <Image
        src={"/assets/icons/payme.svg"}
        alt='payme'
        width={50}
        height={14}
      />
    ),
    name: "payme",
  },
  {
    image: (
      <Image src={"/assets/icons/uzum.svg"} alt='uzum' width={50} height={14} />
    ),
    activeImage: (
      <Image src={"/assets/icons/uzum.svg"} alt='uzum' width={50} height={14} />
    ),
    name: "uzum",
  },
  {
    image: (
      <Image
        src={"/assets/icons/click.svg"}
        alt='click'
        width={50}
        height={20}
      />
    ),
    activeImage: (
      <Image
        src={"/assets/icons/click.svg"}
        alt='click'
        width={50}
        height={20}
      />
    ),
    name: "click",
  },
];

export const oddMenuTabs = [
  "Основное меню",
  "Вторые блюда",
  "Холодные напитки",
  "Горячие напитки",
  "Десерты",
  "Закуски",
  "Салаты",
  "Бар",
];
