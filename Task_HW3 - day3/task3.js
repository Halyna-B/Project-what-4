/*Task 3: Find a Chair
- Find the spare chairs from the array of meeting rooms.
Each meeting room array will have the number of occupants as a string.
Each occupant is represented by 'X'. The room array will also have an integer
telling you how many chairs there are in the room.
- You should return an array of integers that shows how many chairs you take from each room in order,
up until you have the required amount.
 */

function meeting(rooms, needChair) {
  try {
    if (!needChair) return "Game On";

    const arrOfchairs = [];
    for (let i = 0; i < rooms.length; i += 1) {
      arrOfchairs.push(
        rooms[i][0].length < rooms[i][1] ? rooms[i][1] - rooms[i][0].length : 0
      );
      sumOfChairs = arrOfchairs.reduce((acc, el) => acc + el);
      if (sumOfChairs === needChair) return arrOfchairs;
    }

    if (sumOfChairs < needChair) return "Not enough!";
  } catch (e) {
    return `${e.name}: ${e.message}`;
  }
}
