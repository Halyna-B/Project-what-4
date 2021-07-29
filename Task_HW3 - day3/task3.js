/*Task 3: Find a Chair
- Find the spare chairs from the array of meeting rooms.
Each meeting room array will have the number of occupants as a string.
Each occupant is represented by 'X'. The room array will also have an integer
telling you how many chairs there are in the room.
- You should return an array of integers that shows how many chairs you take from each room in order,
up until you have the required amount.
 - If you need no chairs, return 'Game On'.
 - If there aren't enough spare chairs available, return 'Not enough!'
 */

function meeting(rooms, needChair) {
  try {
    if (!needChair) return "Game On";

    const arrOfchairs = [];
    for (let i = 0; i < rooms.length; i += 1) {
    const countChairs = rooms[i][0].length;
      arrOfchairs.push(
        countChairs < rooms[i][1] ? rooms[i][1] - countChairs : 0
      );
      sumOfChairs = arrOfchairs.reduce((acc, el) => acc + el);
      if (sumOfChairs === needChair) return arrOfchairs;
    }

    if (sumOfChairs < needChair) return "Not enough!";
  } catch (e) {
    return `${e.name}: ${e.message}`;
  }
}
