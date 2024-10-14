const Filters = ({alltasks, setTasksToDisplay}) => {
    const showAll = () => {
        setTasksToDisplay(alltasks);
    }
    const showActive = () => {
        const activeTasks = alltasks.filter((task) => !task.isCompleted )
        setTasksToDisplay(activeTasks);
    }
    const showCompleted = () => {
        const completedTasks = alltasks.filter((task) => task.isCompleted )
        setTasksToDisplay(completedTasks);
    }

    return ( 
        <>
            <button className="all" onClick={showAll}>All</button>
            <button className="active" onClick={showActive}>Active</button>
            <button className="completed" onClick={showCompleted}>Completed</button>
        </>
     );
}
 
export default Filters;