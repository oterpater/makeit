const Hotel = require("./hotel");

describe("Hotel function test", () => {
	const myHotel = new Hotel(2);

	it("should create an array of rooms objects", () => {
		expect(myHotel).toMatchObject( { hotelRooms: 2, rooms: [] } );
	});
	
	it("should do checkin correctly", () => {
		myHotel.createRooms();
		expect(myHotel.checkin(1,3)).toBe(true);
	});

	it("should do checkin correctly", () => {
		myHotel.createRooms();
		myHotel.checkin(1,3);
		expect(myHotel.checkin(1,3)).toBe(false);
	});

	it("should do checkout correctly", () => {
		myHotel.createRooms();
		myHotel.checkin(1,3);
		expect(myHotel.checkout(1)).toBe(true);
	});

	it("should do checkout correctly", () => {
		myHotel.createRooms();
		myHotel.checkin(1,3);
		myHotel.checkout(1);
		expect(myHotel.checkout(1)).toBe(false);
	});

	// it("should give Available Rooms", () => {
	// 	myHotel.createRooms();
	// 	myHotel.checkin(1,3);
	// 	expect(myHotel.getAvailableRooms()).toEqual([{ number: 2, available: true, guests: 0 }]);
	// });

});