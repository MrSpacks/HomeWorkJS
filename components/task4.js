// Cоздать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена.
const ClassRoom = [
  { name: "B3", subject: "Chemistry", seats: 10 },
  { name: "C7", subject: "Geometry", seats: 20 },
  { name: "A28", subject: "Physics", seats: 15 },
  { name: "K3", subject: "Chemistry", seats: 20 },
];

const GroupStud = [
  { name: "A", subject: "Geometry", students: 15 },
  { name: "B", subject: "Chemistry", students: 10 },
  { name: "C", subject: "Physics", students: 12 },
];
const divClassRoom = document.getElementById("class_room");
function Title(title) {
  divClassRoom.innerHTML += `<h3 class="title_task">${title}</h3>`;
}
Title("Вывод на экран всех аудиторий.");
export function renderClassRoom(ClassRoom) {
  // 1. Вывод на экран всех аудиторий.
  ClassRoom.forEach((item) => {
    divClassRoom.innerHTML += `
      <div class="items_class_room">
        <div class="item_room">Название аудитории: ${item.name}</div>
        <div class="item_room">
        Предмет: ${item.subject}</div>
        <div class="item_room">Кол-во мест: ${item.seats}</div>
      </div>

`;
  });
}
renderClassRoom(ClassRoom);

export function renderClassRoomsByFaculty(ClassRoom, facultyName) {
  // 2. Вывод на экран аудиторий для указанного факультета.
  const filteredClassRooms = ClassRoom.filter(
    (room) => room.subject === facultyName
  );
  Title("Вывод на экран аудиторий для указанного факультета.");
  renderClassRoom(filteredClassRooms);
}

renderClassRoomsByFaculty(ClassRoom, "Chemistry");
Title(
  `Вывод на экран только тех аудиторий, которые подходят для переданной группы. <span style="color: red">группа  A</span>
`
);
function renderClassRoomsForGroup(ClassRoom, group) {
  // 3. Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия,  количества студентов и названия факультета.
  const suitableRooms = ClassRoom.filter(
    (room) => room.subject === group.subject && room.seats >= group.students
  );
  renderClassRoom(suitableRooms);
}

renderClassRoomsForGroup(ClassRoom, GroupStud[0]);

// 4. Функция сортировки аудиторий по количеству мест.
Title("Функция сортировки аудиторий по количеству мест");
function sortClassRoomsBySeats(ClassRoom) {
  const sortedRooms = [...ClassRoom].sort((a, b) => a.seats - b.seats);
  renderClassRoom(sortedRooms);
}
sortClassRoomsBySeats(ClassRoom);

// 5. Функция сортировки аудиторий по названию (по алфавиту).
Title("Функция сортировки аудиторий по названию (по алфавиту)");
function sortClassRoomsByName(ClassRoom) {
  const sortedRooms = [...ClassRoom].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  renderClassRoom(sortedRooms);
}
sortClassRoomsByName(ClassRoom);
