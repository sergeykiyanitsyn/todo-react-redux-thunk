export const searchTasks = (tasks, searchWord) => {
  const foundTasks = []
  tasks.map((task) => {
    const foundTask = task.description.toUpperCase().search(searchWord.toUpperCase())
    if (foundTask !== -1) {
      foundTasks.push(task)
    }
  })
  return foundTasks
}
