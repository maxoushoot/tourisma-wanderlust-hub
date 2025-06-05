import { Notification } from "@/types";

export const mockNotifications: Notification[] = [
  {
    id: "1",
    message: "Marie Dubois a commenté votre lieu",
    link: "/place/1",
    read: false,
    createdAt: new Date("2024-04-01")
  },
  {
    id: "2",
    message: "Thomas Martin a commencé à vous suivre",
    link: "/profile",
    read: false,
    createdAt: new Date("2024-04-02")
  },
  {
    id: "3",
    message: "Nouveau lieu partagé : Gorges du Verdon",
    link: "/place/2",
    read: true,
    createdAt: new Date("2024-03-30")
  }
];
