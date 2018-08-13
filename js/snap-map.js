

let users =
	[{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}},{"id":2,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv","address":{"street":"Victor Plains","suite":"Suite 879","city":"Wisokyburgh","zipcode":"90566-7771","geo":{"lat":"-43.9509","lng":"-34.4618"}},"phone":"010-692-6593 x09125","website":"anastasia.net","company":{"name":"Deckow-Crist","catchPhrase":"Proactive didactic contingency","bs":"synergize scalable supply-chains"}},{"id":3,"name":"Clementine Bauch","username":"Samantha","email":"Nathan@yesenia.net","address":{"street":"Douglas Extension","suite":"Suite 847","city":"McKenziehaven","zipcode":"59590-4157","geo":{"lat":"-68.6102","lng":"-47.0653"}},"phone":"1-463-123-4447","website":"ramiro.info","company":{"name":"Romaguera-Jacobson","catchPhrase":"Face to face bifurcated interface","bs":"e-enable strategic applications"}},{"id":4,"name":"Patricia Lebsack","username":"Karianne","email":"Julianne.OConner@kory.org","address":{"street":"Hoeger Mall","suite":"Apt. 692","city":"South Elvis","zipcode":"53919-4257","geo":{"lat":"29.4572","lng":"-164.2990"}},"phone":"493-170-9623 x156","website":"kale.biz","company":{"name":"Robel-Corkery","catchPhrase":"Multi-tiered zero tolerance productivity","bs":"transition cutting-edge web services"}},{"id":5,"name":"Chelsey Dietrich","username":"Kamren","email":"Lucio_Hettinger@annie.ca","address":{"street":"Skiles Walks","suite":"Suite 351","city":"Roscoeview","zipcode":"33263","geo":{"lat":"-31.8129","lng":"62.5342"}},"phone":"(254)954-1289","website":"demarco.info","company":{"name":"Keebler LLC","catchPhrase":"User-centric fault-tolerant solution","bs":"revolutionize end-to-end systems"}},{"id":6,"name":"Mrs. Dennis Schulist","username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info","address":{"street":"Norberto Crossing","suite":"Apt. 950","city":"South Christy","zipcode":"23505-1337","geo":{"lat":"-71.4197","lng":"71.7478"}},"phone":"1-477-935-8478 x6430","website":"ola.org","company":{"name":"Considine-Lockman","catchPhrase":"Synchronised bottom-line interface","bs":"e-enable innovative applications"}},{"id":7,"name":"Kurtis Weissnat","username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz","address":{"street":"Rex Trail","suite":"Suite 280","city":"Howemouth","zipcode":"58804-1099","geo":{"lat":"24.8918","lng":"21.8984"}},"phone":"210.067.6132","website":"elvis.io","company":{"name":"Johns Group","catchPhrase":"Configurable multimedia task-force","bs":"generate enterprise e-tailers"}},{"id":8,"name":"Nicholas Runolfsdottir V","username":"Maxime_Nienow","email":"Sherwood@rosamond.me","address":{"street":"Ellsworth Summit","suite":"Suite 729","city":"Aliyaview","zipcode":"45169","geo":{"lat":"-14.3990","lng":"-120.7677"}},"phone":"586.493.6943 x140","website":"jacynthe.com","company":{"name":"Abernathy Group","catchPhrase":"Implemented secondary concept","bs":"e-enable extensible e-tailers"}},{"id":9,"name":"Glenna Reichert","username":"Delphine","email":"Chaim_McDermott@dana.io","address":{"street":"Dayna Park","suite":"Suite 449","city":"Bartholomebury","zipcode":"76495-3109","geo":{"lat":"24.6463","lng":"-168.8889"}},"phone":"(775)976-6794 x41206","website":"conrad.com","company":{"name":"Yost and Sons","catchPhrase":"Switchable contextually-based project","bs":"aggregate real-time technologies"}},{"id":10,"name":"Clementina DuBuque","username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz","address":{"street":"Kattie Turnpike","suite":"Suite 198","city":"Lebsackbury","zipcode":"31428-2261","geo":{"lat":"-38.2386","lng":"57.2232"}},"phone":"024-648-3804","website":"ambrose.net","company":{"name":"Hoeger LLC","catchPhrase":"Centralized empowering task-force","bs":"target end-to-end models"}}];


const prop1 = "email";
const prop2 = "address";
/*
// this version uses only arrays

users.sort((a,b) => a[prop1] > b[prop1]);

// check if the array is sorted by emails
for (let i = 0; i < len - 1; i++ ) {
	console.log(users[i][prop1]);
}

// remove the address field from all users
function removeProperty(arr, prop) {
	for (let i = 0; i < len - 1; i++ ) {
		if (arr[i].hasOwnProperty(prop)) {
			delete arr[i][prop];
		}
		console.log(arr[i]);
	}
}

removeProperty(users, prop2);
*/

// this version uses an array of maps
/*
const objToMap = ( obj => {
	const mp = new Map;
	Object.keys ( obj ). forEach (k => { mp.set(k, obj[k]) });
	return mp;
});

const arrOfMaps = ( arr => {
	const len = arr.length;
	const newArr = [];
	for (let i = 0; i < len; i++ ) {
		newArr.push(objToMap(arr[i]));
	}
	return newArr;
});

// check if that works
mapArr = arrOfMaps(users);
const arrSize = mapArr.length;

console.log("Original array -- size: " + users.length);
console.log("New array -- size: " + arrSize);

// remove address key-value pair from each user
function removeProperty(arr, prop) {
	for (let i = 0; i < arr.length; i++ ) {
		if(arr[i].has(prop)) {
			arr[i].delete(prop);
		}
	}
}

// check if that works
removeProperty(mapArr, prop2);

for (let i = 0; i < arrSize; i++ ) {
	console.log(mapArr[i]);
}

// sort the array of maps using one of the key-value pairs og the maps
mapArr.sort((a,b) => a.get(prop1) > b.get(prop1));
for (let i = 0; i < arrSize; i++ ) {
	console.log(mapArr[i]);
}
*/

// createa a map from an array of maps

// objecto to map
const objToMap = ( obj => {
	const mp = new Map;
	Object.keys ( obj ). forEach (k => { mp.set(k, obj[k]) });
	return mp;
});

// array of objects to array of maps
const arrOfMaps = ( arr => {
	const len = arr.length;
	const newArr = [];
	for (let i = 0; i < len; i++ ) {
		newArr.push(objToMap(arr[i]));
	}
	return newArr;
});

// array of maps to map
mapArr = arrOfMaps(users);
const arrSize = mapArr.length;

const userMap = new Map();
/*
for (let i = 0; i < arrSize; i++ ) {
	userMap.set(mapArr[i], mapArr[i].get(prop1));
}
*/
// check if that works
mapArr.forEach(user => userMap.set(user.get(prop1), user));
console.log(userMap);

// remove address
for (let u of userMap.values()) {
	if (u.has(prop2)) {
		u.delete(prop2);
	}
	console.log(u);
}

// sort by email
const emails = Array.from(userMap.keys());

emails.sort((a,b) => a > b);
console.log(emails);

const sortedArr = [];
const newLen = emails.length;

for (let i = 0; i < newLen; i++ ) {
	sortedArr.push(userMap.get(emails[i]));
}

// check if that works
console.log(sortedArr);
