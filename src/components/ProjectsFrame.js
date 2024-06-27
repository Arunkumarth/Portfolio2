import "./cv.css";

export default function ProjectsFrame(){
    return (
        <div className="iframeContainer">
            <section>
                <h1>To-do List App</h1>
                <iframe src="https://arun-todo-list-app.netlify.app/" scrolling="no" />
             </section>
            <section>
            <h1>Task List</h1>
                <iframe src="https://arunkumarth.github.io/Task_List/" scrolling="no" />
            </section>	
            <section>
            <h1>To-do List App</h1>
				<iframe src="https://arunkumarth.github.io/To-do_List/"scrolling="no"/>
            </section>
            <section className="iframePageLinks">
                <h2>Want to visit the page?</h2>
                <h3>You can find the links bellow</h3>
                <div>
                    <a href="https://arun-todo-list-app.netlify.app/" target="_blank" rel="noreferrer">To-do List App devloped using js</a>
                </div>
                <div>
                <a href="https://arunkumarth.github.io/Task_List/" target="_blank" rel="noreferrer">Task List</a>
                </div>
                <div>
                <a href="https://arunkumarth.github.io/To-do_List/" target="_blank" rel="noreferrer">To-do List App with react</a>
                </div>
            </section>
		</div>
    )
}
