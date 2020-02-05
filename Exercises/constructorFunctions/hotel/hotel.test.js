const {Room, Hotel} = require("./hotel");

describe("Hotel function test", () => {
	
	it("should create a hotel correctly", () => {
		const myHotel = new Hotel(2);
		expect(myHotel).toMatchObject( { hotelRooms: 2, rooms: [] } );
	});
	
	// it("should create the correct number of rooms", () => {
	// 	const myHotel = new Hotel(2);
	// 	myHotel.createRooms();
	// 	expect(myHotel.rooms).toHaveLength(2);
	// 	expect(myHotel.rooms[0]).toBeInstanceOf(Room);
	// });


	it("should do checkin correctly", () => {
		const myHotel = new Hotel(2);
		myHotel.createRooms();
		expect(myHotel.checkin(1,3)).toBeThruty();
	});

	it("should do checkin correctly", () => {
		const myHotel = new Hotel(2);
		myHotel.createRooms();
		myHotel.checkin(1,3);
		expect(myHotel.checkin(1,3)).toBeFalse();
	});

	it("should do checkout correctly", () => {
		const myHotel = new Hotel(2);
		myHotel.createRooms();
		myHotel.checkin(1,3);
		expect(myHotel.checkout(1)).toBe(true);
	});

	it("should do checkout correctly", () => {
		const myHotel = new Hotel(2);
		myHotel.createRooms();
		myHotel.checkin(1,3);
		myHotel.checkout(1);
		expect(myHotel.checkout(1)).toBe(false);
	});

	it("should give Available Rooms", () => {
		myHotel.createRooms();
		myHotel.checkin(1,3);
		expect(myHotel.getAvailableRooms()).toHaveLength(1);
	});

	it("should give Occupied Rooms", () => {
		myHotel.createRooms();
		myHotel.checkin(1,3);
		expect(myHotel.getAvailableRooms()).toHaveLength(1);
	});

});