

//Q2
const booking = {
    hotelName: "TestHotel",
    checkIn: "2025-09-01",
    checkOut: "2025-09-05",
    price: 200000,
    status: "confirmed",
    getInfo() {
        return "Hotel Name: " + this.hotelName + "/ " + "Check In: " + this.checkIn + "/ " + "Check Out: " + this.checkOut;
    },
    getTotal() {
        return this.price;
    },
    isCancelled() {
        return this.status === "cancelled";
    }
};

console.log(booking.getInfo());
console.log(booking.getTotal());
console.log(booking.isCancelled());

