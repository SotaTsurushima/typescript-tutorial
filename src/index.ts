import SaySomething from "./saySomething"

const root: HTMLElement | null = document.getElementById("root")

const saySomething = new SaySomething("Halo verden")

saySomething.sayText(root)