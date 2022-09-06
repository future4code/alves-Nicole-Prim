import { Customer } from "./data/heranca/customer"
import { User } from "./data/heranca/user"
import { Client } from "./data/polimorfismo/client"

const firstUser: User = new User("idabc", "theodoro@email.com", "Theodoro", "123456")
console.log(firstUser.getId(), firstUser.getName(), firstUser.getEmail())

const firstCustomer: Customer = new Customer(
    "idabcd",
    "milka@email.com",
    "Milka",
    "456123",
    "0123.4567.8910.1112"
)

console.log(firstCustomer)

firstUser.introduceYourself()
firstCustomer.introduceYourself()

const firstClient: Client = {
    name: "Oreo",
    registrationNumber: 123456,
    consumedEnergy: 333,
    calculateBill: () => {
        return 2
    }
}

console.log(firstClient)