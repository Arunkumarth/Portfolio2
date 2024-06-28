import Card from "antd/es/card/Card";
import Cvflex from "./Cv-Flex";
import "./cv.css";
import { Carousel } from "antd";
import {
	PhoneOutlined,
	MailOutlined,
	GithubOutlined,
	LinkedinOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
function Cv() {
	return (
		<div className="cv-container">
			<section className="intro">
				<section className="github">
					<a href="https://github.com/Arunkumarth" target="_blank" rel="noreferrer">
						<GithubOutlined />
					</a>
					<a
						href="https://www.linkedin.com/in/arunkumar-t-ab4165212"
						target="_blank"
						rel="noreferrer"
					>
						<LinkedinOutlined />
					</a>
				</section>
				<section className="bio">
					<img src="images/arun.jpg"></img>
					<h1>Hi, I am Arunkumar welcome to my portfolio</h1>
					{/* <h2>Fresher</h2> */}
				</section>
			</section>
			<section className="education">
				<h1>Education</h1>
				<Cvflex
					Info={
						<>
							<h1>School</h1>
							<h3>HSC</h3>
							<p>Percentage:80.3</p>
							<p>School:Governnment Higher Secondary School</p>
							<h3>SSLC</h3>
							<p>Percentage:96.4</p>
							<p>School:Government High School</p>
						</>
					}
					imgUrl="images/icon-school.jpg"
					inverted={false}
				/>
				<Cvflex
					Info={
						<>
							<h1>College</h1>
							<h3>BE-EEE</h3>
							<p>Percentage:8.38 out of 10</p>
							<p>College:Builders Engineering College</p>
						</>
					}
					imgUrl="images/degree3.png"
					inverted={true}
				/>
			</section>
			<section className="skills">
				<h1>Skills</h1>
				<div
					style={{ display: "flex", gap: 20, justifyContent: "space-around" }}
				>
					<Card
						hoverable
						style={{
							width: 160,
						}}
						cover={<img src="images/html5-logo.png"></img>}
					></Card>
					<Card
						style={{
							width: 160,
						}}
						cover={<img src="images/css-logo.png"></img>}
					></Card>
					<Card
						style={{
							width: 160,
						}}
						cover={<img src="images/js-logo.jpg"></img>}
					></Card>
					<Card
						style={{
							width: 160,
						}}
						cover={<img src="images/reaacr-logo.jpg"></img>}
					></Card>
					<Card
						style={{
							width: 160,
						}}
						cover={<img src="images/redux-logo.jpg"></img>}
					></Card>
				</div>
			</section>
			<section className="projects">
				<h1>Projects</h1>
				<Carousel autoplay autoplaySpeed={1500} arrows className="caros">
					<div className="caro">
						<h2>Todo App</h2>
						<img src="images/todo.png"></img>
					</div>
					<div className="caro">
						<h2>TaskList App</h2>
						<img src="images/tasklist.png"></img>
					</div>
					<div className="caro">
						<h2>Todo App with CRUD operations</h2>
						<img src="images/todo-page.jpeg"></img>
					</div>
				</Carousel>
				<h2>Want to try these projects?</h2>
				<Link className="linkToProject" to="/projects">
					Click here
				</Link>
			</section>
			<section className="certificates">
				<h1>Certificates</h1>
				<Carousel
					autoplay
					autoplaySpeed={1600}
					className="certificates-caro"
					useTransform
				>
					<div>
						<img
							className="caro-image"
							src="images/certificates/GuviCertification -python.png"
						></img>
					</div>
					<div>
						<img
							className="caro-image"
							src="images/certificates/guvi buid face reco.png"
						></img>
					</div>
					<div>
						<img
							className="caro-image"
							src="images/certificates/GuviCertification - guiness record.png"
						></img>
					</div>
					<div>
						<img
							className="caro-image"
							src="images/certificates/html,css.jpeg"
						></img>
					</div>
					<div>
						<img
							className="caro-image"
							src="images/certificates/python-begin.jpeg"
						></img>
					</div>
				</Carousel>
			</section>
			<section className="toolsused">
				<h1>Tools Used</h1>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>Java Script</li>
					<li>React js</li>
					<li>Redux js</li>
					<li>Redux Saga</li>
					<li>Ant design</li>
					<li>Axios</li>
				</ul>
			</section>
			<section className="contact">
				<div>
					<h4>For contact:</h4>
					<div>
						<PhoneOutlined />
						<p>9597170376</p>
					</div>
					<div>
						<MailOutlined />
						<p>t.arunkumar3112002@gmail.com</p>
						<div>
							<a className="mail" href="mailto:t.arunkumar3112002@gmail.com">
								Sent email
							</a>
						</div>
					</div>
				</div>
				<div className="direct-account">
					<div>
						<a href="https://github.com/Arunkumarth" target="_blank" rel="noreferrer">
							<GithubOutlined />
							GitHub
						</a>
					</div>
					<div>
						<a
							href="https://www.linkedin.com/in/arunkumar-t-ab4165212"
							target="_blank" rel="noreferrer"
						>
							<LinkedinOutlined />
							Linked In
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Cv;
