document.getElementById("colorChanger").addEventListener("click", function () {
	const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.backgroundColor = randomColor;
});

function updateDeviceDate() {
	const now = new Date();
	const optionsWeekday = { weekday: "short" };
	const optionsDate = { month: "short", day: "numeric", year: "numeric" };

	const weekday = now.toLocaleDateString("en-US", optionsWeekday);
	const date = now.toLocaleDateString("en-US", optionsDate);

	document.getElementById("deviceDate").innerHTML = `
        <div>${weekday}</div>
        <div>${date}</div>
    `;
}
updateDeviceDate();

let remainingTasks = 6;
let completeTasks = 23;
const completedCountDisplay = document.getElementById("completedCount");
const activityLog = document.getElementById("activityLog");
const assignedCountDisplay = document.getElementById("assignedCount");

function completeTask(button, taskName) {
	const now = new Date();
	const timeString = now.toLocaleTimeString();

	button.disabled = true;
	remainingTasks--;
	assignedCountDisplay.innerText = remainingTasks.toString().padStart(2, "0");
	completeTasks++;
	completedCountDisplay.innerText = completeTasks.toString().padStart(2, "0");

	const logEntry = document.createElement("li");
	logEntry.className = "bg-[#f4f7ff]  p-3 rounded-lg text-sm";
	logEntry.innerHTML = `<li> You have completed the task <strong> ${taskName} </strong> at <strong> ${timeString} </strong> </li>`;

	if (activityLog.innerText.includes("No recent activities.")) {
		activityLog.innerHTML = "";
	}

	activityLog.appendChild(logEntry);

	alert("Board Update Successfully!!!");

	if (remainingTasks === 0) {
		alert("Congrats!! You have completed all the current task!!!");
	}
}

function clearHistory() {
	activityLog.innerHTML =
		'<div class="text-gray-400 text-sm">No recent activities.</div>';
}
