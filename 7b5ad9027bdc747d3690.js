export var projectArr=[];export function createProject(r,t){var e=[];return{title:r,id:t,taskArray:e,showProjectArr:function(){return projectArr},pushTask:function(r){e.push(r)}}}export function pushProject(r){projectArr.push(r)}export function showProjects(){return projectArr}export var taskArr=[];export function pushTask(r){taskArr.push(r)}export function showTasks(){return taskArr}export function removeTask(r){var t=taskArr.indexOf(r);t>-1&&taskArr.splice(t,1)}export function createTask(r,t,e,o,n,u,s){return{title:r,dueDate:t,priority:e,description:o,notes:n,taskID:u,projectID:getCurrentID()}}export function assignID(){return String(Date.now()*Math.random())}var id;export function currentDiv(r){id=r}export function getCurrentID(){return id}